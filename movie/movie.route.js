import express from "express";
import { addMovie, editMovie } from "./movie.logic.js";
import { validateReqBody } from "../middleware/validation.middleware.js";
import { movieSchema } from "./movie.validation.js";
import { validateMongoIdMiddleware } from "../middleware/mongo.id.validation.js";
const router = express.Router();
//add movie
router.post("/movie/add", validateReqBody(movieSchema), addMovie());
//edit movie
router.put(
  "/movie/edit/:id",
  validateReqBody(movieSchema),
  validateMongoIdMiddleware(),
  editMovie()
);
//get movies

export default router;
