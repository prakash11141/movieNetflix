import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 55,
  },
  rating: {
    type: Number,
    required: false,
    min: 0,
    max: 10,
    default: null,
  },
  duration: {
    type: Number,
    required: true,
    min: 0,
  },
  genres: {
    type: String,
    required: true,
    maxlength: 55,
    trim: true,
  },
  // addedBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: "users",
  // },
});
const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
