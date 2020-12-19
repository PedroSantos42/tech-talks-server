import 'reflect-metadata';
import mongo from '@shared/infra/repositories/mongo';

import express from 'express';
import routes from './routes';

import '@shared/container';

mongo.openConnection();

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('🚀️💻️ API running at port 3333...'));
