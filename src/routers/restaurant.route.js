import express from "express";
import asyncHandler from "express-async-handler";

import {
  restaurantCreate,
  reviewCreate,
} from "../controllers/restaurant.controller.js";

export const restaurantRouter = express.Router();

restaurantRouter.get("/create", asyncHandler(restaurantCreate));
restaurantRouter.post("/write", asyncHandler(reviewCreate));
