import path from 'node:path';

import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { getEnvVar } from './utils/getEnvVar.js';
import router from './routers/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import cookieParser from 'cookie-parser';

const PORT = Number(process.env.PORT || getEnvVar('PORT', '3000'));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/photo', express.static(path.resolve('src', 'uploads', 'photos')));

app.use(cookieParser());
export async function setupServer() {
  try {
    app.use(cors());
    app.use(pino());

    app.get('/', (req, res) => {
      res.json({
        message: 'Wellcome!',
      });
    });
    app.use('/', router);

    app.use(notFoundHandler);

    app.use(errorHandler);

    app.listen(PORT, (error) => {
      if (error) {
        throw error;
      }

      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Server error:', error);
  }
}
