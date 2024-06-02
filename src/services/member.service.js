import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { signupResponseDTO } from "../dtos/member.dto";
import {
  addMember,
  getMember,
  getMemberPreferToMemberID,
  setMemberPrefer,
} from "../models/member/member.dao";

export const joinMember = async (body) => {
  const {
    email,
    name,
    gender,
    birthday,
    addr,
    specAddr,
    phone,
    social_type,
    point,
  } = body;

  const prefer = body.prefer;

  const joinMemberData = await addMember({
    name: name,
    gender: gender,
    birthday: birthday,
    addr: addr,
    specAddr: specAddr,
    phone: phone,
    email: email,
    social_type: social_type,
    point: point,
    prefer: prefer,
  });

  let email_duplicate = -1;

  if (joinMemberData == email_duplicate) {
    throw new BaseError(status.EMAIL_ALREADY_EXIST);
  } else {
    for (let i = 0; i < prefer.length; i++) {
      await setMemberPrefer(joinMemberData, prefer[i]);
    }
    const memberData = await getMember(joinMemberData);
    const preferData = await getMemberPreferToMemberID(joinMemberData);

    return signupResponseDTO(memberData, preferData);
  }
};
