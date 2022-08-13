import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteContact, getContacts, postContact } from 'service/contactAPI';
import { FETCH } from './contacts-types';

export const fetchContacts = createAsyncThunk(FETCH, async () => {
  const { data } = await getContacts();
  return data;
});

export const addContact = createAsyncThunk(FETCH, async contact => {
  await postContact(contact);
  const { data } = await getContacts();
  return data;
});

export const deleteItem = createAsyncThunk(FETCH, async id => {
  await deleteContact(id);
  const { data } = await getContacts();
  return data;
});
