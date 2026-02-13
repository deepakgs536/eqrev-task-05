import express, { json } from 'express';

const app = express();
const PORT = 5000;

app.use(json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from API' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
