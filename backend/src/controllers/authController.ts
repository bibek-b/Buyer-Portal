import type { Request, Response } from "express";
import User from "../models/User.js";
import * as bcrypt from "bcrypt-ts";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;

  try {
    const isUserExists = await User.findOne({ email });

    if (isUserExists) {
      return res
        .status(409)
        .json({ success: false, message: "User already exists! Please login" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const { accessToken } = generateToken(user._id);

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    const { password: userPassword, ...safeUser } = user.toObject();

    return res
      .status(201)
      .json({
        success: true,
        message: "Registration successful!",
        data: safeUser,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server error, Please try again." });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found! Please register" });
    }

    const { password: userPassword, ...safeUser } = user.toObject();

    const isPasswordMatch = await bcrypt.compare(password, userPassword);

    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid password!" });
    }

    const { accessToken } = generateToken(user._id);

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res
      .status(200)
      .json({
        success: true,
        message: "Login successful",
        data: safeUser,
        accessToken,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server error, Please try again." });
  }
};
