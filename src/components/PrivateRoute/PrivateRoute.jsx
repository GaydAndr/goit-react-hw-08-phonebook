import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/auth/auth-selectors';

export const PrivateRoute = ({ children }) => {
  const accountToken = useSelector(getToken);
  return accountToken ? (
    children
  ) : (
    <Navigate to="/goit-react-hw-08-phonebook/login"></Navigate>
  );
};
