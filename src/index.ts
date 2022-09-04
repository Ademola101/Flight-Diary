import express from 'express';
import cors from 'cors';
import dairyRouter from './routes/diaries';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/diaries', dairyRouter);

const PORT = 3001;
app.get('/api/ping', (_req, res) => {
  console.log('someone pinged me');
  res.send('Hello world');
  
});

app.listen(PORT, () => {
  console.log('server running');
  
});