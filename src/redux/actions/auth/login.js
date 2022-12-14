import {
  CLEAR_AUTH_STATE,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes/auth';
import http from '../../../helpers/axiosInterceptior';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loginUser =
  ({userName: username, password}) =>
  dispatch => {
    dispatch({
      type: LOGIN_LOADING,
    });

    http
      .post('/auth/login', {
        username,
        password,
      })
      .then(response => {
        const result = response?.data;
        if (result.status == 'Success') {
          AsyncStorage.setItem('token', result.data.token);
          AsyncStorage.setItem('user', JSON.stringify(result.data.user));
  
          dispatch({
            type: LOGIN_SUCCESS,
            payload: result.data.user,
          });
        }
        else if (result.status == 'Error') {
          dispatch({
            type: LOGIN_FAIL,
            payload: result?.message ?
                {error: result.message} :
                {error: 'Something went wrong, try again!'}
          });
        }
      })
      .catch(error => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response?.data?.errors ?
            err.response?.data?.errors :
            {error: err.response?.data?.message},
        });
      });
  };

export const userLogout = () => async dispatch => {
  // call logout api here
  await AsyncStorage.removeItem('token');
  await AsyncStorage.removeItem('user');

  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default loginUser;
