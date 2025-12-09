const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
  {
    startISO: { type: String },
    secs: { type: Number },
  },
  { _id: false }
);

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    coins: { type: Number, default: 0 },
    sessions: [sessionSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
