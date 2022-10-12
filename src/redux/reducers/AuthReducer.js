import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_AUTH_STATE,
  LOGIN_LOADING,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  CLEAR_STATE_ERROR,
} from '../../constants/actionTypes/auth';
import AuthInitialState from '../initialStates/AuthInitialState';

const AuthReducer = (state = AuthInitialState, {type, payload}) => {
  switch (type) {
    case REGISTER_LOADING:
    case LOGIN_LOADING:
      return {...state, loading: true};

    case REGISTER_SUCCESS:
      return {...state, loading: false, data: payload};

    case LOGIN_SUCCESS:
      return {...state, loading: false, data: payload, isLoggedIn: true};

    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {...state, loading: false, error: payload};

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        data: {},
        error: null,
      };

    case CLEAR_STATE_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default AuthReducer;
