import '#/config/env';
import cors from 'cors';
import express from 'express';

import { FindLanguagesRepositoriesController } from './controllers/FindLanguagesRepositoriesController';
import { FindRepositoriesController } from './controllers/FindRepositoriesController';
import { expressHandler } from './helpers/decorators';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/repositories', expressHandler(new FindRepositoriesController()));
app.get(
  '/languages',
  expressHandler(new FindLanguagesRepositoriesController()),
);

app.listen(3000, () => console.log('Listen on port %d', 3000)); // eslint-disable-line
