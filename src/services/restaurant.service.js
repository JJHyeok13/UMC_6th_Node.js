import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import {
  createRestaurantResponseDTO,
  writeReviewResponseDTO,
} from "../dtos/restaurant.dto.js";
import {
  addRestaurant,
  getRestaurant,
  addReview,
  getReview,
} from "../models/restaurant/restaurant.dao.js";

export const createRestaurant = async (body) => {
  const { name, region_id, foodtype_id, address } = body;

  const createRestaurantData = await addRestaurant({
    name: name,
    address: address,
    region_id: region_id,
    foodtype_id: foodtype_id,
  });

  let restaurant_duplicate = -1;

  if (createRestaurantData == restaurant_duplicate) {
    throw new BaseError(status.RESTAURANT_ALREADY_EXIST);
  } else {
    return createRestaurantResponseDTO(
      await getRestaurant(createRestaurantData)
    );
  }
};

export const createReview = async (body) => {
  const { member_id, restaurant_id, content, rating } = body;

  const addReviewData = await addReview({
    member_id: member_id,
    restaurant_id: restaurant_id,
    content: content,
    rating: rating,
  });

  if (addReviewData == -1) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  } else {
    return writeReviewResponseDTO(await getReview(addReviewData));
  }
};
