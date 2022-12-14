import http from '../../../helpers/axiosInterceptior';
import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../../../constants/actionTypes/auth';

export default ({
    userName: username,
    email,
    password,
    firstName: first_name,
    lastName: last_name,
  }) =>
  dispatch =>
  onSuccess => {
    dispatch({
      type: REGISTER_LOADING,
    });

    // api call here
    http
      .post('/auth/register', {
        username,
        first_name,
        last_name,
        email,
        password,
      })
      .then(res => {
        const result = res?.data;
        if (result.status == 'Success') {
          dispatch({
            type: REGISTER_SUCCESS,
            payload: result.data,
          });
  
          onSuccess(result.data);
        }
        else if (result.status == 'Error') {
          dispatch({
              type: REGISTER_FAIL,
              payload: result?.message ?
              {error: result.message} :
              {error: 'Something went wrong, try again!'}
          });
        }
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response?.data?.errors ?
            err.response?.data?.errors :
            {error: err.response?.data?.message},
        });
      });
  };
