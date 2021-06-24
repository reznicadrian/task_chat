import express from "express";
import * as channelController from "../controller/channelController.js";
const router = express.Router();

router.route("/create-channel").post(channelController.createChannel);
router.route("/all-channels").get(channelController.getAllChannels);

export { router as channelRouter };
