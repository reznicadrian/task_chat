import sequelize from "../bin/db.js";
import DataTypes from "sequelize";
import MessageModel from "./messageModel.js";

const ChannelModel = sequelize.define("channel", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
});

ChannelModel.hasMany(MessageModel);
export default ChannelModel;
