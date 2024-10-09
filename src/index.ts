import express from 'express';
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', (req: any, res: any) => {
  return res.json('Hello world');
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
})