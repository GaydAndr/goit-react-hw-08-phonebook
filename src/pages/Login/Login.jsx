import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, TextField } from '@mui/material';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import s from './Login.module.css';
import { logIn } from 'redux/auth/auth-operations';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPass(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email: email, password: pass }));
    setEmail('');
    setPass('');
  };
  return (
    <div className={s.form_wrapper}>
      <h2 className={s.label}>Log in</h2>
      <Box
        className={s.form_box}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch', display: 'flex' },
        }}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <TextField
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          label="Email"
          variant="outlined"
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
          Log in
        </Button>
      </Box>
    </div>
  );
};
