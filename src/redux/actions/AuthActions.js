import { REGISTER_LOADING } from "../../constants/actionTypes";

export const userRegister = (form) => dispatch => {
  dispatch({
    type: REGISTER_LOADING,
  });

  // api call here
};
