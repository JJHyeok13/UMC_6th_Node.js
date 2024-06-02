import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import {
  createRestaurant,
  createReview,
} from "../services/restaurant.service.js";

export const restaurantCreate = async (req, res, next) => {
  console.log("가게 생성을 요청하였습니다!");
  console.log("body:", req.body);

  res.send(response(status.SUCCESS), await createRestaurant(req.body));
};

export const reviewCreate = async (req, res, next) => {
  console.log("리뷰 작성을 요청하였습니다!");
  console.log("body:", req.body);

  res.send(response(status.SUCCESS), await createReview(req.body));
};
