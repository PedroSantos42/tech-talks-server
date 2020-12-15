import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import '@shared/container';

const app = express();

app.use(routes);

app.listen(3333, () => console.log('API running at port 3333...'));
