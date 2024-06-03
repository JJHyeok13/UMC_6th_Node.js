// Member 추가하기
export const insertMemberSql = `
  INSERT INTO Member (name, gender, birthday, addr, specAddr, phone, email, social_type, point) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0)
`;

// ID 값으로 Member 찾기
export const getMemberByID = `
  SELECT * FROM Member WHERE id = ?
`;

// Member와 FoodType 연결하기 (MemberFoodType Table에 추가하기)
export const connectFoodCategory = `
  INSERT INTO MemberFoodType (member_id, foodtype_id) VALUES (?, ?);
`;

// 중복되는 이메일 확인하기
export const confirmEmail = `
  SELECT EXISTS(SELECT 1 FROM Member WHERE email = ?) as isExistEmail;
`;

//
export const getPreferToMemberID = `
  SELECT mft.id, mft.foodtype_id, mft.member_id, ft.name
  FROM MemberFoodType mft
  JOIN FoodType ft on mft.foodtype_id = ft.id
  WHERE mft.member_id = ?
  ORDER BY mft.foodtype_id ASC;
`;
