import express from 'express';
import { validateObjectId } from '../middlewares/validateObjectId.js';

import {
  getContactsController,
  getContactByIdController,
  deleteContactController,
  createContactController,
  updateContactController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();

const jsonParser = express.json();

router.get('/', ctrlWrapper(getContactsController));

router.get(
  '/:contactId',
  validateObjectId(),
  ctrlWrapper(getContactByIdController),
);

router.delete(
  '/:contactId',
  validateObjectId(),
  ctrlWrapper(deleteContactController),
);

router.post('/', jsonParser, ctrlWrapper(createContactController));

router.patch(
  '/:contactId',
  validateObjectId(),
  jsonParser,
  ctrlWrapper(updateContactController),
);

export default router;
