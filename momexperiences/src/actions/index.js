import axios from 'axios';

export const FETCH_MOM_EXPERIENCES_SUCCESS = 'FETCH_MOM_EXPERIENCES_SUCCESS'
export const FETCH_MOM_EXPERIENCES_FAIL = 'FETCH_MOM_EXPERIENCES_FAIL'


export const experienceSuccessFetch =  () => dispatch => {
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then(res => dispatch({ type: FETCH_MOM_EXPERIENCES_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_MOM_EXPERIENCES_FAIL, payload: err}))
}


export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  localStorage.removeItem("token");
  return axios
    .post("http://localhost:5000/api/login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response.status === "Error") {
        localStorage.removeItem("token");
      }
      dispatch({ type: LOGIN_FAILURE, payload: err.response.message });
    });
};
