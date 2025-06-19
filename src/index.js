import 'dotenv/config';
import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

<<<<<<< Updated upstream
initMongoConnection();
setupServer();
=======
console.log('Starting MongoDB connection...');

initMongoConnection()
  .then(() => {
    console.log('MongoDB connected');
    setupServer();
  })
  .catch((err) => {
    console.error('FATAL ERROR:', err.message);
    process.exit(1);
  });
>>>>>>> Stashed changes
