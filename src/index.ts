import express from 'express';
import cors from 'cors';
import router from './routes/podcasts';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

const PORT = 4000;

app.get('/api', (_req, res) => {
  res.send('Successfully connected to the API server');
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
