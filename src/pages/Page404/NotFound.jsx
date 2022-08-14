import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLogin } from 'redux/auth/auth-selectors';

export const NotFound = () => {
  const isLogin = useSelector(getLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate('/contacts');
      return;
    } else {
      navigate('/login');
      return;
    }
  }, [isLogin, navigate]);
};
