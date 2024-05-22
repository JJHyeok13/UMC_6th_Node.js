export const insertMemberSql =
  "INSERT INTO Member (name, gender, birthYear, birthMonth, birthDay, addr, specAddr, phone, email, social_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

export const getMemberByID = "SELECT * FROM Member WHERE id = ?";

export const connectFoodCategory =
  "INSERT INTO member_favor_category (f_category_id, member_id) VALUES (?, ?);";

export const confirmEmail =
  "SELECT EXISTS(SELECT 1 FROM Member WHERE email = ?) as isExistEmail";

export const getPreferToMemberID =
  "SELECT mfc.mf_category_id, mfc.f_category_id, mfc.member_id, fcl.f_category_name " +
  "FROM member_favor_category mfc JOIN food_category_list fcl on mfc.f_category_id = fcl.f_category_id " +
  "WHERE mfc.member_id = ? ORDER BY mfc.f_category_id ASC;";
