export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';

export const userLogin = (username, password) => dispatch => {
    dispatch({
        type: LOGIN,
        payload: {
            username, password
        }
    });
}

export const userLogout = () => dispatch => {
    dispatch({
        type: LOGOUT,
    });
}