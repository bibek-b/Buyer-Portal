import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Property", propertySchema);