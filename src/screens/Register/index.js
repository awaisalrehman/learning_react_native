import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import RegisterComponent from '../../components/Register';
import register, {clearAuthState} from '../../redux/actions/auth/register';
import {useEffect} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';
import {useCallback} from 'react';

const SignUp = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {data, error, loading} = useSelector(state => state.AuthReducer);
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  useEffect(() => {
    if (Object.keys(data).length) {
      navigate(LOGIN);
    }
  }, [data]);

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (Object.keys(data).length || error) {
          console.log('in focus effect');
          clearAuthState()(dispatch);
        }
      };
    }, [data, error]),
  );

  const onChange = (name, value) => {
    setForm({...form, [name]: value});

    // validation errors
    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {
              ...prev,
              [name]: 'The password fields need min 6 characters',
            };
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'The user name field is required'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'The first name field is required'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'The last name field is required'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'The email field is required'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'The password field is required'};
      });
    }

    if (
      Object.values(form).length == 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(dispatch);
    }
  };

  return (
    <RegisterComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      errors={errors}
      loading={loading}
      error={error}
    />
  );
};

export default SignUp;
