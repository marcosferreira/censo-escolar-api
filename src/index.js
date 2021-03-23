import 'dotenv/config.js';

import './db.js';
import app from './app.js';

const PORT = process.env.PORT || 3333;
const LOGS = () => console.log(`Started server in http://127.0.0.1:${PORT}`);

if (!process.env.JWT_SECRET_KEY) {
  console.log('FATAL ERROR: JWT_SECRET_KEY is not defined.');
  process.exit(1);
}

app.listen(PORT, LOGS);
