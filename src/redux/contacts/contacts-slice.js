import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts.filter(({ id }) => id !== payload);
    },
    filterContact: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;

export default contactSlice.reducer;
