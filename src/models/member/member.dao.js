import { pool } from "../../../config/db.config.js";
import { BaseError } from "../../../config/error.js";
import { status } from "../../../config/response.status.js";
import {
  connectFoodCategory,
  confirmEmail,
  getMemberByID,
  insertMemberSql,
  getPreferToMemberID,
} from "./member.sql.js";

// Add Member
export const addMember = async (data) => {
  try {
    const conn = await pool.getConnection();
    const [confirm] = await conn.query(confirmEmail, [data.email]);

    if (confirm[0].isExistEmail) {
      conn.release();
      return -1;
    }

    const result = await conn.query(insertMemberSql, [
      data.name,
      data.gender,
      data.birthday,
      data.addr,
      data.specAddr,
      data.phone,
      data.email,
      data.social_type,
      data.point,
    ]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    console.log("addMember Error:", err);
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

// Get Member by ID
export const getMember = async (memberId) => {
  try {
    const conn = await pool.getConnection();
    const [member] = await conn.query(getMemberByID, [memberId]);

    if (member.length == 0) {
      conn.release();
      return -1;
    }

    conn.release();
    return member[0];
  } catch (err) {
    console.log("getMember Error:", err);
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

// Set Member Preference
export const setMemberPrefer = async (member_id, foodtype_id) => {
  try {
    const conn = await pool.getConnection();
    await conn.query(connectFoodCategory, [member_id, foodtype_id]);
    conn.release();
  } catch (err) {
    console.log("setMemberPrefer Error:", err);
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

// Get Member Preferences by Member ID
export const getMemberPreferToMemberID = async (memberId) => {
  try {
    const conn = await pool.getConnection();
    const [prefer] = await conn.query(getPreferToMemberID, [memberId]);
    conn.release();
    return prefer;
  } catch (err) {
    console.log("getMemberPreferToMemberID Error:", err);
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};
