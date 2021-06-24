import sequelize from "../config/db.js";
import DataTypes from "sequelize";

const UserModel = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

const MessageModel = sequelize.define("message", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  message: { type: DataTypes.STRING },
});

const ChannelModel = sequelize.define("channel", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
});

ChannelModel.hasMany(MessageModel, { as: "messages" });
MessageModel.belongsTo(ChannelModel, {
  foreignKey: "channelId",
  as: "channels",
});

UserModel.hasMany(MessageModel, { as: "messages" });
MessageModel.belongsTo(UserModel, { foreignKey: "userId", as: "users" });

export { UserModel, MessageModel, ChannelModel };
