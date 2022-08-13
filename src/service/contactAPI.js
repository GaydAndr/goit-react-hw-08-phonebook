import axios from 'axios';
axios.defaults.baseURL = 'https://62f693cd612c13062b514d81.mockapi.io';

export const getContacts = async () => {
  try {
    const { data } = await axios.get('/contacts');
    return { data };
  } catch (error) {
    return error.message;
  }
};

export const postContact = async contact => {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const deleteContact = async id => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    return error.message;
  }
};
