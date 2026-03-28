import mongoose, { Schema } from "mongoose";


const favoriteSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
     propertyId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
        required: true
    },
});

export default mongoose.model("Favorite", favoriteSchema);