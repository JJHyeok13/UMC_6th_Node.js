export const insertMemberSql = `
  INSERT INTO Member (name, gender, birthday, addr, specAddr, phone, email, social_type, point) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0)
`;

export const getMemberByID = `
  SELECT * FROM Member WHERE id = ?
`;

export const connectFoodCategory = `
  INSERT INTO MemberFoodType (member_id, foodtype_id) VALUES (?, ?);
`;

export const confirmEmail = `
  SELECT EXISTS(SELECT 1 FROM Member WHERE email = ?) as isExistEmail;
`;

export const getPreferToMemberID = `
  SELECT mft.id, mft.foodtype_id, mft.member_id, ft.name
  FROM MemberFoodType mft
  JOIN FoodType ft on mft.foodtype_id = ft.id
  WHERE mft.member_id = ?
  ORDER BY mft.foodtype_id ASC;
`;
