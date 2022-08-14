import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteContact, getContacts, postContact } from 'service/contactAPI';
import { ADD, DELETE, FETCH } from './contacts-types';
import { toast } from 'react-toastify';

export const fetchContacts = createAsyncThunk(FETCH, async () => {
  const { data } = await getContacts();
  return data;
});

export const addContact = createAsyncThunk(ADD, async contact => {
  const data = await postContact(contact);
  toast.success(' Contact added');

  return data;
});

export const deleteItem = createAsyncThunk(DELETE, async id => {
  await deleteContact(id);
  toast.success('Deleted');
  return id;
});
