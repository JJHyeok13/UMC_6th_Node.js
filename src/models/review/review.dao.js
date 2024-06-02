import { pool } from "../../../config/db.config.js";
import { BaseError } from "../../../config/error.js";
import { status } from "../../../config/response.status.js";

export const addReview = async (data) => {
  try {
      const conn = await pool.getConnection();
      
      
  } catch (error) {
    console.log("addMember Error:", err);
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};
