import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { joinMember } from "../services/member.service.js";

export const memberSignup = async (req, res, next) => {
  try {
    console.log("회원가입을 요청하였습니다!");
    console.log("body:", req.body);

    const result = await joinMember(req.body);
    res.status(200).json(response(status.SUCCESS, result));
  } catch (error) {
    next(error);
  }
};
