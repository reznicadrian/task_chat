import sequelize from "../config/db.js";
import DataTypes from "sequelize";
import ChannelModel from "./channelModel.js";
import UserModel from "./userModel.js";

const MessageModel = sequelize.define("message", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  message: { type: DataTypes.STRING },
});

export default MessageModel;

MessageModel.belongsTo(UserModel);
MessageModel.belongsTo(ChannelModel);
