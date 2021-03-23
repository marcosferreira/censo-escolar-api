import express, { json } from 'express';
import cors from 'cors';

import routes from './router.js';

const app = express();

app.use(json());
app.use(cors());
app.use(routes);

export default app;
