import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { userRouter } from "./src/routers/member.route.js";
import { specs } from "./config/swagger.config.js";
import SwaggerUi from "swagger-ui-express";
import { response } from "./config/response.js";
import { status } from "./config/response.status.js";

dotenv.config(); // Use .env file for environment variables

const app = express();

// Server settings - view, static, body-parser etc.
app.set("port", process.env.PORT || 3000); // Set server port
app.use(cors()); // Allow CORS
app.use(express.static("public")); // Serve static files from 'public' directory
app.use(express.json()); // Parse JSON request body
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded request body

app.use("/member", userRouter); // Use userRouter for routes starting with /user

app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(specs)); // Swagger setup for API documentation

app.use((err, req, res, next) => {
  // Set template engine variables
  res.locals.message = err.message;
  // Print error in development environment, hide in production
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  console.log("error", err);
  res
    .status(err.data.status || status.INTERNAL_SERVER_ERROR)
    .send(response(err.data));
});

app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
