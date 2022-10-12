import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import LoginComponent from '../../components/Login';
import loginUser from '../../redux/actions/auth/login';
import {clearStateError} from '../../redux/actions/auth/error';

const Login = () => {
  const [form, setForm] = useState({});
  const {error, loading} = useSelector(state => state.AuthReducer);
  const dispatch = useDispatch();

  const handleErrorDismiss = () => {
    clearStateError()(dispatch);
  };

  const onChange = (name, value) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    if (
      Object.keys(form).length === 2 &&
      Object.keys(form).every(item => item.trim().length > 3)
    ) {
      loginUser(form)(dispatch);
    }
  };

  return (
    <LoginComponent
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
      onErrorDismiss={handleErrorDismiss}
    />
  );
};

export default Login;
