import express from "express";
import * as messageController from "../controller/messageController.js";
const router = express.Router();

router.route("/create-message").post(messageController.createMessage);

export { router as messageRouter };
