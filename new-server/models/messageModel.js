import sequelize from "../bin/db.js";
import DataTypes from "sequelize";
import ChannelModel from "./channelModel.js";
import UserModel from "./userModel.js";

const MessageModel = sequelize.define("message", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  message: { type: DataTypes.STRING },
});

ChannelModel.hasMany(MessageModel);
MessageModel.belongsTo(ChannelModel);

export default MessageModel;
