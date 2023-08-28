import express from 'express';
import cors from 'cors';
import Parser from 'rss-parser';

const app = express();

app.use(express.json());

// const whitelist = ['http://localhost:3000'];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true,
// };
app.use(cors());

const PORT = 4000;

app.get('/api', async (req, res) => {
  const { url } = req.query;
  const parser = new Parser();
  const feed = await parser.parseURL(url as string);

  return res.json(feed);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
