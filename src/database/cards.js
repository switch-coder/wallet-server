import mongoose from "mongoose";

export const Card = mongoose.model("Card", { name: String })