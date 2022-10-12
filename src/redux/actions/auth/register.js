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
  dispatch => {
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
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response?.data
            ? err.response.data
            : {error: 'Something went wrong, try again!'},
        });
      });
  };
