import {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_AUTH_STATE,
} from '../../constants/actionTypes/auth';
import AuthInitialState from '../initialStates/AuthInitialState';

const AuthReducer = (state = AuthInitialState, {type, payload}) => {
  switch (type) {
    case REGISTER_LOADING:
      return {...state, loading: true};

    case REGISTER_SUCCESS:
      return {...state, loading: false, data: payload};

    case REGISTER_FAIL:
      return {...state, loading: false, error: payload};

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        data: {},
        error: null,
      };

    default:
      return state;
  }
};

export default AuthReducer;
