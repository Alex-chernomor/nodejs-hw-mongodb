import express from 'express';
import { isValidId } from '../middlewares/validateObjectId.js';
import { validateBody } from '../middlewares/validateBody.js';

import {
  getContactsController,
  getContactByIdController,
  deleteContactController,
  createContactController,
  updateContactController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { upload } from '../middlewares/upload.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contact.js';

const router = express.Router();

const jsonParser = express.json();

router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactId', isValidId, ctrlWrapper(getContactByIdController));

router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));

router.post(
  '/',
  upload.single('photo'),
  jsonParser,
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.patch(
  '/:contactId',
  isValidId,
  jsonParser,
  validateBody(updateContactSchema),
  ctrlWrapper(updateContactController),
);

export default router;
