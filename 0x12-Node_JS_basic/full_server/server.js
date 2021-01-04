import express from 'express';
import controllerRouting from './routes/index';

const args = process.argv.slice(2);

const app = express();
const port = args[1] || 1245;

controllerRouting(app);

app.listen(port, () => {
  //   console.log(`Example app listening at http://localhost:${port}`);
});
