import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import {
  createRestaurant,
  createReview,
} from "../services/restaurant.service.js";

export const restaurantCreate = async (req, res, next) => {
  try {
    console.log("가게 생성을 요청하였습니다!");
    console.log("body:", req.body);

    const result = await createRestaurant(req.body);
    res.status(200).json(response(status.SUCCESS, result));
  } catch (error) {
    next(error);
  }
};

export const reviewCreate = async (req, res, next) => {
  try {
    console.log("리뷰 작성을 요청하였습니다!");
    console.log("body:", req.body);

    const result = await createReview(req.body);
    res.status(200).json(response(status.SUCCESS, result));
  } catch (error) {
    next(error);
  }
};
