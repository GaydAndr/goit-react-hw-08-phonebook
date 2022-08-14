import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import s from './SingIn.module.css';
import { signIn } from 'redux/auth/auth-operations';

export const SingIn = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPass(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const credentials = { name: name, email: email, password: pass };
    dispatch(signIn(credentials));
    setName('');
    setEmail('');
    setPass('');
  };

  return (
    <div className={s.form_wrapper}>
      <h2 className={s.label}>Sign in</h2>
      <Box
        className={s.form_box}
        component="form"
        sx={{
          '& > :not(style)': {
            m: 1,
            width: '25ch',
            display: 'flex',
          },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          label="Name"
          variant="outlined"
          autoComplete="name"
        />
        <TextField
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          label="Email"
          variant="outlined"
          autoComplete="email"
        />
        <TextField
          id="password"
          name="password"
          type="password"
          value={pass}
          onChange={handleChange}
          label="Password"
          variant="filled"
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<AccountBoxOutlinedIcon />}
        >
          Register
        </Button>
      </Box>
    </div>
  );
};
