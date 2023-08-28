import express from 'express';
import podcastRssParser from '../services/podcast-rss-parser';

const router = express.Router();

router.post('/rss-parser', async (req, res) => {
  const { url } = req.body;
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');

  const response = await podcastRssParser(url);
  res.json(response);
});

export default router;
