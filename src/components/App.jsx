import { useSelector, useDispatch } from 'react-redux';

import { getCurrentUser } from 'redux/auth/auth-operations';
import { getIsRefreshed, getToken } from 'redux/auth/auth-selectors';
import { useEffect } from 'react';
import { DotLoader } from 'react-spinners';
import { AppBar } from './AppBar/AppBar';
import { Routes, Route } from 'react-router-dom';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { SingIn } from 'pages/SingIn/SingUp';
import { Login } from 'pages/Login/Login';
import { Contacts } from 'pages/Contacts/Contacts';
import { NotFound } from 'pages/Page404/NotFound';
import { Home } from './Home/Home';

// const Login = lazy(() => import('pages/Login'));
// const Contacts = lazy(() => import('pages/Contacts'));
// const SingIn = lazy(() => import('pages/SingIn'));
// const NotFound = lazy(() => import('pages/Page404'));

export const App = () => {
  const token = useSelector(getToken);
  // const isRefreshed = useSelector(getIsRefreshed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, token]);

  return (
    <>
      {/* {isRefreshed ? (
        <DotLoader />
      ) : ( */}
      <>
        <AppBar />
        <Routes>
          <Route index path="/goit-react-hw-08-phonebook/" element={<Home />} />
          <Route
            path="/goit-react-hw-08-phonebook/register"
            element={
              <PublicRoute>
                <SingIn />
              </PublicRoute>
            }
          />
          <Route
            path="/goit-react-hw-08-phonebook/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/goit-react-hw-08-phonebook/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
      {/* )} */}
    </>
  );
};
