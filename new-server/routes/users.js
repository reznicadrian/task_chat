import express from "express";
import * as userController from "../controller/userController.js";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.route("/register").post(userController.registerUser);

export { router as usersRouter };
