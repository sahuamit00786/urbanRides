import express from 'express';
import userController from '../controller/user.controller.js';
import tokenVerify from '../middleware/tokenVerify.js';
import path from "path"
import { fileURLToPath } from 'url';
const route = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

route.post("/userRegister", userController().registration);
route.post("/userLogin", userController().login);
route.post("/updateUser", tokenVerify,userController().updateUser);
route.post("/forgotPassword", userController().forgotPassword);

route.get("/reset-password", async(req,res) => {
  return res.sendFile(path.join(__dirname, '../resetform.html'));
});

route.post("/updatePassword",userController().updatePassword)

export default route;