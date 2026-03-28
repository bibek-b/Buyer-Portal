import type { Request, Response } from "express";
import Property from "../models/Property.js";

export const getAllProperties = async (req: Request, res: Response) => {
  try {
    const properties = await Property.find();
    return res
      .status(200)
      .json({
        success: true,
        message: "All properties fetched successfuly!",
        data: properties,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Error fetching all properties!" });
  }
};
