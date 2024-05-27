import Movie from "./movie.model.js";
export const addMovie = () => {
  //add movie
  return async (req, res) => {
    const movieData = req.body;
    const movie = await Movie.findOne({
      name: movieData.name,
      rating: movieData.rating,
      genres: movieData.genres,
      duration: movieData.duration,
    });
    if (movie) {
      return res
        .status(409)
        .send({ message: "Movie with this details already exists." });
    }
    await Movie.create(movieData);
    return res.status(201).send({ message: "Movie is added succesfully" });
  };
};
export const editMovie = () => {
  return async (req, res) => {
    const newMovie = req.body;
    const movieId = req.params.id;
    const movie = await Movie.findOne({ _id: movieId });
    if (!movie) {
      return res
        .status(404)
        .send({ message: "Movie with this ID does not exists" });
    }
    await Movie.updateOne(
      { _id: movieId },
      {
        $set: {
          ...newMovie,
        },
      }
    );
    return res.status(200).send({ message: "Movie is edited successfully." });
  };
};
