import path from 'node:path';

import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve('src', 'tmp'));
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniquePrefix + '-' + file.originalname);
  },
});

export const upload = multer({ storage });


// import multer from 'multer';
// import path from 'path';
// import { nanoid } from 'nanoid';

// const tempDir = path.resolve('tmp'); // Временная директория

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, tempDir);
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     cb(null, nanoid() + ext);
//   },
// });

// const upload = multer({
//   storage,
//   limits: {
//     fileSize: 5 * 1024 * 1024, // до 5MB
//   },
// });

// export { upload };