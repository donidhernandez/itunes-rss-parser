import express from 'express';
import cors from 'cors';
import router from './routes/podcasts';

const app = express();

app.use(express.json());

const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));

const PORT = 4000;

app.get('/api', (_req, res) => {
  res.send('Successfully connected to the API server');
});

app.use('/podcasts', router);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
