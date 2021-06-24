import asyncHandler from "express-async-handler";
import { ChannelModel } from "../models/models.js";

const getAllChannels = asyncHandler(async (req, res) => {
  const channels = await ChannelModel.findAll();

  if (channels) res.status(200).json(channels);
});

const createChannel = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const channel = await ChannelModel.create({ name });

  if (channel) res.status(201).json(channel);
});

export { getAllChannels, createChannel };
