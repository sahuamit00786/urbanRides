import jwt from "jsonwebtoken"

const tokenVerify = async (req, res, next) => {
  try {
    const token = req.headers.Authorization?.split(" ")[1] || req.cookies.token;
    console.log("token",token)
     if (!token) {
      return res.status(401).json({ msg: 'No token provided' });
     }
    const valid = jwt.verify(token, process.env.JWT_SECRET);
    if (!valid) {
      return res.status(500).json({msg:"Not Authorized"})
    }
    req.user = valid;
    console.log("user",req.user)
    next();
  } catch (error) {
    return res.status(500).json({ msg: "internal server error" });
  }
}

export default tokenVerify;