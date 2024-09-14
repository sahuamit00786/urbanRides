// zeuh opef pltd ehsh

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like 'smtp.mailgun.org', 'smtp.sendgrid.net', etc.
  auth: {
    user: 'sahuamit00786@gmail.com', // Your email address
    pass: 'zeuh opef pltd ehsh'   // Your email password or app-specific password
  }
});

const sendPasswordResetEmail = async (toEmail, resetToken) => {
  const resetLink = `http://localhost:3000/api/user/reset-password?token=${resetToken}`;

  const mailOptions = {
    from: 'sahuamit00786@gmail.com', // Sender address
    to: toEmail,                  // List of recipients
    subject: 'Password Reset Request', // Subject line
    text: `Hello,\n\nPlease use the following link to reset your password:\n\n${resetLink}\n\nIf you did not request a password reset, please ignore this email.\n\nThank you!`, // Plain text body
    html: `<p>Hello,</p><p>Please use the following link to reset your password:</p><p><a href="${resetLink}">Reset Password</a></p><p>If you did not request a password reset, please ignore this email.</p><p>Thank you!</p>` // HTML body
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Password reset email sent successfully');
  } catch (error) {
    console.error('Error sending password reset email:', error);
  }
};

export default sendPasswordResetEmail;