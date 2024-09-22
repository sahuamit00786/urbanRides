import bcryptjs from 'bcryptjs';
import { User } from '../models/user.model.js';
import jwt from "jsonwebtoken"
import sendPasswordResetEmail from '../config/mailtransfer.js';

function userController() {
  return {
    registration: async (req, res) => {
      console.log('req.body', req.body);
      const { name, email, password, phone, alternatePhone } = req.body;

      try {
        if (!name || !email || !password || !phone || !alternatePhone) {
          return res.status(404).json({ msg: 'missing fields found' });
        }

        const exists = await User.findOne({ email });
        if (exists) {
          return res
            .status(400)
            .json({ msg: 'Email already exists', status: 0 });
        }

        const hashedPassword = await bcryptjs.hashSync(password, 10);

        const registeredUser = await User.create({
          name,
          email,
          password: hashedPassword,
          phone,
          alternatePhone,
        });

        if (registeredUser) {
          return res.status(201).json({
            msg: 'User Created Successfully',
            registeredUser,
            status: 1,
          });
        }
      } catch (error) {
        return res.status(500).json({ msg: 'Error creating user', error });
      }
    },

    login: async (req, res) => {
      console.log("Req",req.body)
      const { email } = req.body;
      try {
        const user = await User.findOne({ email:email });
        if (!user) {
          return res.status(404).json({ msg: "User does not exist" });
        }

        const validPassword = await bcryptjs.compareSync(req.body.password, user.password);
        if (!validPassword) {
          return res.status(400).json({ msg: 'Invalid password', status: 0 });
        }

        const token = jwt.sign(
          { userId: user._id, userRole: user.userType },
          process.env.JWT_SECRET,
          { expiresIn: "1d" }
        );
        
         res.cookie('token', token, {
          httpOnly: true,
        });

       const { password, ...rest } = user._doc;

       return res.status(201).json({
          msg: "Log in Successfully",
         token,
         userData: rest,
         status:1
        });

      } catch (error) {
       return res.status(500).json({ msg: "Server error", error });
      }
    },

    updateUser: async (req, res) => {
      const { userId, address, name, phone, alternatePhone } = req.body;
      const user = await User.findOne({ userId });
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
      if (address) {
        user.address = address;
      }
      if (name) {
        user.name = name;
      }
      if (phone) {
        user.phone = phone;
      }
      if (alternatePhone) {
        user.alternatePhone = alternatePhone;
      }
      if (req.body.password) {
        const hashedPassword = await bcryptjs.hashSync(req.body.password, 10);
        user.password = hashedPassword;
      }

      const updatedUser = await user.save();
      const { password, ...rest } = updatedUser._doc;

      return res.status(201).json({
        msg: "Updated Successfully",
        user:rest
      })
    },

    forgotPassword: async (req, res) => {
      const { email } = req.body;
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(404).json({ msg: "User does not exist" });
        }

        const resetToken = jwt.sign({ email:user.email }, process.env.RESET_PASSWORD_SECRET, { expiresIn: "10m" });

        await sendPasswordResetEmail(email, resetToken).then(() => {
          return res.status(201).json({ msg: "Email sent successfully" });
        })
        
      } catch (error) {
        return res.status(500).json({ msg: "Email sent failed" });
      }
    },

    updatePassword : async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    if (!token) {
      return res.status(400).json({ msg: "Token is required" });
    }

    const decoded = jwt.verify(token, process.env.RESET_PASSWORD_SECRET);
    const email = decoded.email; // Extract the email

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const hashedPassword = bcryptjs.hashSync(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return res.json({ msg: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password:", error);
    return res.status(400).json({ msg: "Error updating password" });
  }
}
  }
}

export default userController;