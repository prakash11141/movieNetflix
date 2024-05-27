import { checkMongoIdValidity } from "../utils/check.mongo.id.validity.js";

export const validateMongoIdMiddleware = () => {
  return (req, res, next) => {
    const id = req.params.id;
    const isValidMongoId = checkMongoIdValidity(id);
    if (!isValidMongoId) {
      return res.status(400).send({ message: "Invalid mongo id." });
    }
    next();
  };
};
