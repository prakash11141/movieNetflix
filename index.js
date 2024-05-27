import express from "express";
import connectDB from "./db.connect.js";
import movieRoutes from "./movie/movie.route.js";
const app = express();
app.use(express.json());
await connectDB();
app.use(movieRoutes);
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App is listning to ${PORT}`);
});
