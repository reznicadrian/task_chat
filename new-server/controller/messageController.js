import asyncHandler from "express-async-handler";
import { MessageModel } from "../models/models.js";

const createMessage = asyncHandler(async (req, res) => {
  const { user_id, channel_id, message } = req.body;
  const newMessage = await MessageModel.create({
    user_id,
    channel_id,
    message,
  });

  if (newMessage) res.status(201).json(newMessage);
});

export { createMessage };
