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
        AsyncStorage.setItem('token', response.data.token);
        AsyncStorage.setItem('user', JSON.stringify(response.data.user));

        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: LOGIN_FAIL,
          payload: error.response?.data
            ? error.response?.data
            : {error: 'Something went wrong, try again!'},
        });
      });
  };

export const userLogout = () => async dispatch => {
  await AsyncStorage.removeItem('token');
  await AsyncStorage.removeItem('user');

  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default loginUser;
