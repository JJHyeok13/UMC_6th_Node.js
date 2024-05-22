import express from "express";
import asyncHandler from "express-async-handler";

import { memberSignup } from "../controllers/member.controller.js";

export const userRouter = express.Router();

userRouter.post("/signup", asyncHandler(memberSignup));
