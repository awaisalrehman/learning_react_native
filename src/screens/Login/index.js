import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import LoginComponent from '../../components/Login';
import loginUser from '../../redux/actions/auth/login';
import {clearStateError} from '../../redux/actions/auth/error';
import {useRoute} from '@react-navigation/native';
import {useEffect} from 'react';

const Login = () => {
  const [form, setForm] = useState({});
  const [justSignup, setJustSignup] = useState(false);
  const {error, loading} = useSelector(state => state.AuthReducer);
  const dispatch = useDispatch();
  const {params} = useRoute();

  useEffect(() => {
    if (params?.data) {
      setJustSignup(true);
      setForm({...form, userName: params.data.username});
    }
  }, [params]);

  const handleErrorDismiss = () => {
    clearStateError()(dispatch);
  };

  const onChange = (name, value) => {
    setJustSignup(false);
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
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
      onErrorDismiss={handleErrorDismiss}
      justSignup={justSignup}
    />
  );
};

export default Login;
