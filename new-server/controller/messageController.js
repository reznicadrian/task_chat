import asyncHandler from "express-async-handler";
import { MessageModel } from "../models/models.js";

const createMessage = asyncHandler(async (req, res) => {
  const { userId, message } = req.body;
  const newMessage = await MessageModel.create({
    userId,

    message,
  });

  if (newMessage) res.status(201).json(newMessage);
});

export { createMessage };
