import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
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

    const [confirm] = await pool.query(confirmEmail, [data.email]);

    if (confirm[0].isExistEmail) {
      conn.release();
      return -1;
    }

    const result = await pool.query(insertMemberSql, [
      data.name,
      data.gender,
      data.birthYear,
      data.birthMonth,
      data.birthDay,
      data.addr,
      data.specAddr,
      data.phone,
      data.email,
      data.social_type,
    ]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

// Get Member by ID
export const getMember = async (memberId) => {
  try {
    const conn = await pool.getConnection();
    const [member] = await pool.query(getMemberByID, [memberId]);

    console.log(member);

    if (member.length == 0) {
      return -1;
    }

    conn.release();
    return member;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

// Set Member Preference
export const setMemberPrefer = async (memberId, foodCategoryId) => {
  try {
    const conn = await pool.getConnection();

    await pool.query(connectFoodCategory, [foodCategoryId, memberId]);

    conn.release();
    return;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

// Get Member Preferences by Member ID
export const getMemberPreferToMemberID = async (memberId) => {
  try {
    const conn = await pool.getConnection();
    const prefer = await pool.query(getPreferToMemberID, [memberId]);

    conn.release();
    return prefer;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};
