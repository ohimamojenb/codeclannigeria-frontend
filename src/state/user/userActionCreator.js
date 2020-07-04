import * as types from './userActionTypes';
import axios from 'axios';
import history from '../../history';
import codeClanApi from '../../api/apiUtils';

export const getUserProfileApi = () => {
  return dispatch => {
    dispatch({ type: types.USER_START });
    return codeClanApi
      .get('profile')
      .then(res => {
        dispatch({ type: types.USER_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err, err.response);
        const error_msg = err.response.data.message || 'An error occured';

        dispatch({
          type: types.USER_FAILURE,
          payload: error_msg,
        });
      });
  };
};
// {
//   "email": "onasanyatunde67@gmail.com",
//   "clientBaseUrl": "https://google.com",
//   "tokenParamName": "string",
//   "emailParamName": "string"
// }