import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import s from './AppBar.module.css';
import { getLogin, getUserName } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';

export const AppBar = () => {
  const isLogin = useSelector(getLogin);
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <header className={s.header}>
      <div className={s.home_wrapper}>
        <NavLink
          className={({ isActive }) => (isActive ? s.active_link : s.link_nav)}
          to="/goit-react-hw-08-phonebook/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? s.active_link : s.link_nav)}
          to="/goit-react-hw-08-phonebook/contacts"
        >
          Contacts
        </NavLink>
      </div>
      {isLogin && (
        <div className={s.logged_box}>
          <div className={s.user_box}>
            <h3 className={s.logged_text}>Welcome: {name}</h3>
            <Avatar
              className={s.user_img}
              // githubHandle="sitebase"
              size={30}
              round="20px"
            />
          </div>
          <Button
            sx={{ height: '30px' }}
            onClick={handleLogOut}
            variant="contained"
            endIcon={<LogoutIcon />}
          >
            Log Out
          </Button>
        </div>
      )}
      {!isLogin && (
        <div className={s.register_box}>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.active_link : s.link_nav
            }
            to="/goit-react-hw-08-phonebook/register"
          >
            Sign in
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.active_link : s.link_nav
            }
            to="/goit-react-hw-08-phonebook/login"
          >
            Log in
          </NavLink>
        </div>
      )}
    </header>
  );
};
