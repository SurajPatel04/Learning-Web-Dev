import mongoose from "mongoose";

const urlSchema = mongoose.Schema(
  {
    shortId: {
      type: String,
      unique: true,
      required: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamp: true },
);

const URL = mongoose.model("Url", urlSchema);

export default URL;
