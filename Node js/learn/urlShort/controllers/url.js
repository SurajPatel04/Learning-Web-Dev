import { nanoid } from "nanoid";

import URL from "../models/url.js";
const handleGenerateNewShortURL = async (req, res) => {
  const body = req.body;
  const shortId = nanoid(8);
  if (!body.url) {
    return res.status(400).json({ error: "url is required" });
  }

  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.status(200).json({ shorId: shortId });
};

const handleShortUrl = async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
  );

  if (!entry) {
    return res.status(404).json({ msg: "Not found" });
  }

  return res.redirect(entry.redirectURL);
};

const handleAnalytics = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });

  if (!result) {
    return res.status(404).json({ msg: "Not found" });
  }

  return res.status(200).json({
    total_visit: result.visitHistory.length,
    visits: result.visitHistory,
  });
};
export { handleGenerateNewShortURL, handleShortUrl, handleAnalytics };
