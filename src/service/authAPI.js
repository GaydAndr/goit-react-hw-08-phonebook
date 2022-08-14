// import axios from 'axios';
// import { toast } from 'react-toastify';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// export const tokenAuth = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// export const signIn = async credentials => {
//   try {
//     const { data } = await axios.post('/users/signup', credentials);
//     tokenAuth.set(data.token);
//     toast.success('You are signed');
//     return { data };
//   } catch (error) {
//     toast.error('Something wrong');
//     return error.message;
//   }
// };

// export const logIn = async credentials => {
//   try {
//     const { data } = await axios.post('/users/login', credentials);
//     tokenAuth.set(data.token);
//     toast.success('You are logged');
//     return data;
//   } catch (error) {
//     toast.error('Something wrong');
//     return error.message;
//   }
// };

// export const logOut = async credentials => {
//   try {
//     await axios.post('/users/logout', credentials);
//     tokenAuth.unset();
//     toast.success('You are logged out');
//   } catch (error) {
//     return error.message;
//   }
// };

// export const deleteContact = async id => {
//   try {
//     const { data } = await axios.get('/users/current');
//     return data;
//   } catch (error) {
//     return error.message;
//   }
// };
