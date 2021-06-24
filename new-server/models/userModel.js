import sequelize from "../config/db.js";
import DataTypes from "sequelize";
import MessageModel from "./messageModel.js";

const UserModel = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

UserModel.hasMany(MessageModel);

export default UserModel;
