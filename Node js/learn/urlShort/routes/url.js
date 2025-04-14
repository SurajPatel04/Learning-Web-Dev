import express from "express";

import {
  handleGenerateNewShortURL,
  handleShortUrl,
  handleAnalytics,
} from "../controllers/url.js";

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", handleShortUrl);
router.get("/anaytics/:shortId", handleAnalytics);
export default router;
