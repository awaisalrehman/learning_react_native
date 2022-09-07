import React, {useState} from 'react';
import RegisterComponent from '../../components/Register';

const SignUp = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

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
  };

  return (
    <RegisterComponent
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      errors={errors}
    />
  );
};

export default SignUp;
