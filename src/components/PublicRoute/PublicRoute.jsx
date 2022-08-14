import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLogin } from 'redux/auth/auth-selectors';

export const PublicRoute = ({ children }) => {
  const isLogin = useSelector(getLogin);
  return isLogin ? (
    <Navigate to="/goit-react-hw-08-phonebook/contacts" />
  ) : (
    children
  );
};
