import express from 'express';
import {
  getContactsController,
  getContactByIdController,
  deleteContactController,
  cteateContactController,
  updateContactController,
} from '../controllers/contacts.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();

const jsonParser = express.json();

router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactId', ctrlWrapper(getContactByIdController));

router.delete('/:contactId', ctrlWrapper(deleteContactController));

router.post('/', jsonParser, ctrlWrapper(cteateContactController));

router.patch('/:contactId', jsonParser, ctrlWrapper(updateContactController));

export default router;
