import express from 'express';
import config from './config.js';
import serverRender from './renderers/server.js';
import { data } from './testData.json';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const initialContent = serverRender();
  res.render('index', { initialContent });
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(config.port, () => {
  console.info(`Running on port ${config.port}`);
});
