import { pool } from "../../../config/db.config";
import { BaseError } from "../../../config/error";
import { status } from "../../../config/response.status";

import {
  getRestaurantById,
  insertRestaurant,
  getReviewById,
  insertReview,
} from "./restaurant.sql";

export const addRestaurant = async (data) => {
  try {
    const conn = await pool.getConnection();
    const result = await pool.query(insertRestaurant, [
      data.name,
      data.address,
      data.region_id,
      data.foodtype_id,
    ]);

    conn.release();
    return result[0].insertId;
  } catch (error) {
    console.log("식당 추가 에러", error);
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

export const getRestaurant = async (restaurantId) => {
  try {
    const conn = await pool.getConnection();
    const [restaurant] = await pool.query(getRestaurantById, restaurantId);

    if (restaurant.length == 0) {
      return -1;
    }

    conn.release();
    return restaurant;
  } catch (error) {
    console.log("식당 찾기 에러", error);
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

export const addReview = async (data) => {
  try {
    const conn = await pool.getConnection();
    const { member_id, restaurant_id, rating, content } = data;
    const restaurant = await getRestaurant(restaurant_id);

    if (restaurant.length == 0) {
      return -1;
    }

    const result = await pool.query(insertReview, [
      member_id,
      restaurant_id,
      rating,
      content,
    ]);

    conn.release();
    return result[0].insertId;
  } catch (error) {
    console.log("리뷰 추가 에러", error);
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};

export const getReview = async (reviewId) => {
  try {
    const conn = await pool.getConnection();
    const [review] = await pool.query(getReviewById, reviewId);

    if (review.length == 0) {
      return -1;
    }

    conn.release();
    return review;
  } catch (error) {
    console.log("리뷰 찾기 에러", error);
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};
