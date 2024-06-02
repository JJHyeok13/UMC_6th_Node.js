export const createRestaurantResponseDTO = (restaurant) => {
  return {
    name: restaurant[0].name,
    address: restaurant[0].address,
    foodtype_id: restaurant[0].foodtype_id,
    region_id: restaurant[0].region_id,
  };
};

export const writeReviewResponseDTO = (review) => {
  return {
    member_id: review[0].member_id,
    restaurant_id: review[0].restaurant_id,
    rating: review[0].rating,
    content: review[0].content,
  };
};
