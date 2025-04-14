import express from "express";

import {
  handleGenerateNewShortURL,
  handleShortUrl,
} from "../controllers/url.js";

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", handleShortUrl);
export default router;
