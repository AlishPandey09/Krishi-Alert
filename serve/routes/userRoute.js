import createUser from "../controller/userController.js";
//import consoles from "../controller/userController.js";
import express from "express";
const userRouter= express.Router();
userRouter.route("/")
.post(createUser)
export default userRouter