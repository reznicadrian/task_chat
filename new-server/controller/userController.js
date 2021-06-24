import { UserModel } from "../models/models.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await UserModel.findOne({ where: { email } });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }
  const hashPassword = await bcrypt.hash(password, 5);
  const user = await UserModel.create({
    name,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    });
  }
});

export { registerUser };
