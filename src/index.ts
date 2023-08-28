import express from 'express';
import cors from 'cors';
import Parser from 'rss-parser';

const app = express();

app.use(express.json());

const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));

const PORT = 4000;

app.get('/api', async (req, res) => {
  const { url } = req.query;
  const parser = new Parser();
  const feed = await parser.parseURL(url as string);

  res.json(feed);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
