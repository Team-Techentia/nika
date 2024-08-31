import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    coverImage : { type: String },
    title: { type: String, required: [true, "Enter title"] },
    post: { type: String, required: [true, "Enter description"] },
    date: { type: String },   
    tag: { type: String } 
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
