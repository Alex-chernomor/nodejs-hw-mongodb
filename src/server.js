import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { getEnvVar } from './utils/getEnvVar.js';
import router from './routers/contacts.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

const PORT = Number(getEnvVar('PORT', '3000'));

const app = express();

export async function setupServer() {
  try {
    app.use(cors());
    app.use(pino());


    app.get('/', (req, res) => {
      res.json({
        message: 'Wellcome!',
      });
    });
    app.use('/contacts', router);

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
