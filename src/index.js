import 'dotenv/config';
import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

initMongoConnection();
setupServer();

console.log('Starting MongoDB connection...');
initMongoConnection()
  .then(() => {
    console.log('MongoDB connected');
    setupServer();
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });


  initMongoConnection()
  .then(setupServer)
  .catch((err) => {
    console.error('FATAL ERROR:', err.message);
    process.exit(1);
  });