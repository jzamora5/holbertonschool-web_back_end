import express from 'express';
import controllerRouting from './routes/index';

const args = process.argv.slice(2);

const app = express();
const port = 1245;
const DATABASE = args[0];

controllerRouting(app, DATABASE);

app.listen(port, () => {
  //   console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
