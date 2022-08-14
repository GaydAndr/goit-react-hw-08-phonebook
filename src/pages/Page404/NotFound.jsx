import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLogin } from 'redux/auth/auth-selectors';

export const NotFound = () => {
  const isLogin = useSelector(getLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate('/goit-react-hw-08-phonebook/contacts');
      return;
    } else {
      navigate('/goit-react-hw-08-phonebook/login');
      return;
    }
  }, [isLogin, navigate]);
};
