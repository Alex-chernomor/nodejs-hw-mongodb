import { Contact } from '../models/contact.js';

export const getAllContacts = async () => {
  return await Contact.find();
};

export const getContactById = async (contactId) => {
  return await Contact.findById(contactId);
};

export const deleteContact = async (contactId) => {
  return Contact.findByIdAndDelete(contactId);
};

export const createContact = async (payload) => {
  return Contact.create(payload);
};

export const updateContact = async (contactId, payload) => {
  return Contact.findByIdAndUpdate(contactId, payload);
};
