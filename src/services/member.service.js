import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { signupResponseDTO } from "../dtos/member.dto";
import {
  addMember,
  getMember,
  getMemberPreferToMemberID,
  setMemberPrefer,
} from "../models/member.dao";

export const joinMember = async (body) => {
  const prefer = body.prefer;

  const joinMemberData = await addMember({
    name: body.name,
    gender: body.gender,
    birthYear: body.birthYear,
    birthMonth: body.birthMonth,
    birthDay: body.birthDay,
    addr: body.addr,
    specAddr: body.specAddr,
    phone: body.phone,
    email: body.email,
    social_type: body.social_type, // Assuming this field is included in the body
  });

  if (joinMemberData == -1) {
    throw new BaseError(status.EMAIL_ALREADY_EXIST);
  } else {
    for (let i = 0; i < prefer.length; i++) {
      await setMemberPrefer(joinMemberData, prefer[i]);
    }
    return signupResponseDTO(
      await getMember(joinMemberData),
      await getMemberPreferToMemberID(joinMemberData)
    );
  }
};
