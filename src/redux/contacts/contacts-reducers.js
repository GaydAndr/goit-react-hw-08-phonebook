import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContact, deleteItem, fetchContacts } from './contacts-operations';
import { filterContact } from './contscts-actions';

const itemReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (_, { payload }) => payload,
  [deleteItem.fulfilled]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const errorReducer = createReducer('', {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [addContact.rejected]: (_, { payload }) => payload,
  [deleteItem.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => '',
  [addContact.pending]: () => '',
  [deleteItem.pending]: () => '',
});

const loadingReducer = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteItem.pending]: () => true,
  [deleteItem.fulfilled]: () => false,
  [deleteItem.rejected]: () => false,
});

export const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});
