import { GET_CONTACTS_LOADING, GET_CONTACTS_FAIL, GET_CONTACTS_SUCCESS } from '../../../constants/actionTypes/contacts';
import axios from '../../../helpers/axiosInterceptior';

const getContacts = () => dispatch => {
    dispatch({
        type: GET_CONTACTS_LOADING
    });

    axios.get('/contacts').then(res => {
        const result = res?.data;
        if (result?.status == 'Success') {
            dispatch({
                type: GET_CONTACTS_SUCCESS,
                payload: result.data.data
            });
        }
        else if (result?.status == 'Error') {
            dispatch({
                type: GET_CONTACTS_FAIL,
                payload: result?.message ?
                {error: result.message} :
                {error: 'Something went wrong, try again!'}
            });
        }
    }).catch(err => {
        dispatch({
            type: GET_CONTACTS_FAIL,
            payload: err.response?.data?.errors ?
            err.response?.data?.errors :
            {error: err.response?.data?.message},
        });
    })
};

export default getContacts;