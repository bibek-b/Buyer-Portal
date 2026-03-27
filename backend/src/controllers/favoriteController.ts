import type { Request, Response } from "express";
import Favorite from "../models/Favorite.js";
import Property from "../models/Property.js";
import User from "../models/User.js";

export const getAllFavorites = async (req: Request, res: Response) => {
  try {
    const favorites = await Favorite.find();
    return res.status(200).json({
      success: true,
      message: "All favorites fetched successfully!",
      data: favorites,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, messsage: "Server error. Please try again" });
  }
};

export const getUserFavorites = async (req: Request, res: Response) => {
  const userId = req.user.id;
  try {
    const isUserExists = await User.findById(userId);

    if (!isUserExists) {
      return res
        .status(404)
        .json({ success: false, message: "User doesnot exists!" });
    }

    const favorites = await Favorite.find({ user: userId });
    return res.status(200).json({
      success: true,
      message: "User favorites fetched successfully!",
      data: favorites,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, messsage: "Server error. Please try again" });
  }
};

export const addFavorite = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const { propertyId } = req.params;
  try {
    const isPropertyExists = await Property.findById(propertyId);

    if (!isPropertyExists) {
      return res
        .status(404)
        .json({ success: false, message: "Property doesnot exists!" });
    }

    const isUserExists = await User.findById(userId);

    if (!isUserExists) {
      return res
        .status(404)
        .json({ success: false, message: "User doesnot exists!" });
    }

    await Favorite.create({ property: propertyId, user: userId });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, messsage: "Server error. Please try again" });
  }
};

export const deleteFavorite = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const { propertyId } = req.params;
  try {
    const isPropertyExists = await Property.findById(propertyId);

    if (!isPropertyExists) {
      return res
        .status(404)
        .json({ success: false, message: "Property doesnot exists!" });
    }
    await Favorite.deleteOne({ user: userId, property: propertyId });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, messsage: "Server error. Please try again" });
  }
};
