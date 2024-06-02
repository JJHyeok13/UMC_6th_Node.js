export const signupResponseDTO = (member, prefer) => {
  const preferFood = [];
  for (let i = 0; i < prefer[0].length; i++) {
    preferFood.push(prefer[0][i].name);
  }
  return {
    email: member.email,
    name: member.name,
    preferCategory: preferFood,
  };
};
