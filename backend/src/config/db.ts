import mongoose from "mongoose"
import { env } from "./env.js";


export const connectDb = async () => {
    try {
        await mongoose.connect(env.DB_URI!);
        console.log("Connected to db")
    } catch (error) {
        console.log("Failed to connect db: ", error)
    }
}