import axios from 'axios';

export const FETCH_MOM_EXPERIENCES_SUCCESS = 'FETCH_MOM_EXPERIENCES_SUCCESS'
export const FETCH_MOM_EXPERIENCES_FAIL = 'FETCH_MOM_EXPERIENCES_FAIL'


export const experienceSuccessFetch =  () => dispatch => {
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then(res => dispatch({ type: FETCH_MOM_EXPERIENCES_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_MOM_EXPERIENCES_FAIL, payload: err}))
}
