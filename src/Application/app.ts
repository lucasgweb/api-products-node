import 'reflect-metadata';
import '../Infrastructure/container';
import 'express-async-errors';
import 'dotenv/config';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import { ormCreateConnection } from '@infra/database';

import { handleError } from './Middlewares/Error';
import { router } from './Routes';

const app = express();

ormCreateConnection('default');

app.use(cors({ origin: '*' }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/v1', router);
app.use(handleError);

export { app };
