import {
  CLEAR_AUTH_STATE,
  CLEAR_STATE_ERROR,
} from '../../../constants/actionTypes/auth';

export const clearAuthState = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export const clearStateError = () => dispatch => {
  dispatch({
    type: CLEAR_STATE_ERROR,
  });
};
