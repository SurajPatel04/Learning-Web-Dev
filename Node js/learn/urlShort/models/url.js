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
    visitHistory: [{ timestamps: { type: Number } }],
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true },
);

const URL = mongoose.model("Url", urlSchema);

export default URL;
