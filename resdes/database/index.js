import express from 'express';
const app = express()
const port = process.env.PORT || 4000;

import fs from 'node:fs/promises';
import bodyParser from 'body-parser';
import url from 'url';
app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/projects', async (req, res) => {
  const parsedUrl = url.parse('https://responsive-design-1backend.onrender.com', true);
  const projects = await fs.readFile('./data/available-projects.json', 'utf8');
  console.log('GET /projects')
  res.json(JSON.parse(projects));
});

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: 'Not found' });
});

// app.listen(3000);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})