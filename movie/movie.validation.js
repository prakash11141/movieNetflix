import Yup from "yup";
export let movieSchema = Yup.object({
  name: Yup.string()
    .required("Name is required.")
    .trim()
    .max(55, "Name must be at max 55 characters."),
  rating: Yup.number()
    .min(0, "Rating must be at least 0.")
    .max(10, "Rating must be at max 10.")
    .positive("Rating must be positive number"),
  duration: Yup.number()
    .min(0, "Duration must be minimum 0")
    .positive("Duration must be positive number"),
  genres: Yup.string()
    .required("Genres is required.")
    .trim()
    .max(55, "Genres must be at max 55 characters."),
});
