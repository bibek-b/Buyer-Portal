import mongoose, { Schema } from "mongoose";


const favoriteSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
     property:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
        required: true
    },
});

export default mongoose.model("Favorite", favoriteSchema);