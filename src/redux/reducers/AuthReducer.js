import {REGISTER_SUCCESS} from '../../constants/actionTypes';
import {REGISTER_LOADING} from '../actions/AuthActions';
import AuthInitialState from '../initialStates/AuthInitialState';

const AuthReducer = (state = AuthInitialState, {type, payload}) => {
  switch (type) {
    case REGISTER_LOADING:
      return {...state, isLoggedIn: true};

    case REGISTER_SUCCESS:
      return {...state, isLoggedIn: false, data: payload};

    case REGISTER_SUCCESS:
      return {...state, isLoggedIn: false, error: payload};

    default:
      return state;
  }
};

export default AuthReducer;
