// sign up response DTO
export const signupResponseDTO = (member, prefer) => {
  const preferFood = [];
  for (let i = 0; i < prefer[0].length; i++) {
    preferFood.push(prefer[0][i].f_category_name);
  }
  return {
    email: member[0].email,
    name: member[0].member_name,
    preferCategory: preferFood,
  };
};
