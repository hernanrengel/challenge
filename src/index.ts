require('dotenv').config();
import express from 'express';

import { DataHttp } from './http/data.http';

const router = express.Router();

const app = express();

const testEmail = 'fmonrroyv@gmail.com';

router.get('/login', (req, res, next) => {
  DataHttp.login(testEmail);
});

app.use('/', router);

app.listen(8888, () => {
  console.log(`server running on port 8888`);
});
