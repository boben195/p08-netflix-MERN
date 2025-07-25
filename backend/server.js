import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config({ debug: true });

const app = express();

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('Hello World YOYOY!');
});

app.listen(PORT, () => {
  connectDB();  
  console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;

