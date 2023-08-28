import express from 'express';
import podcastRssParser from '../services/podcast-rss-parser';

const router = express.Router();

router.post('/rss-parser', async (req, res) => {
  const { url } = req.body;

  const response = await podcastRssParser(url);
  res.json(response);
});

export default router;
