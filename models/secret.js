import mongoose from "mongoose";
const schema = new mongoose.Schema({
        intensity: String,
        secret: String,
        peopleAware: Number
})

export const Secret = mongoose.model("Secret", schema);