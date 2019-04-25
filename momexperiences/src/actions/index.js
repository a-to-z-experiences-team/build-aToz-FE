import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";




export const FETCH_MOM_EXPERIENCES = "FETCH_MOM_EXPERIENCES";

export const experienceSuccessFetch = () => dispatch => {
  dispatch({ type: FETCH_MOM_EXPERIENCES, payload: ["meg"] });
};





export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  localStorage.removeItem("token");
  return axios
    .post("http://localhost:5000/api/login", {
      username: "moms",
      password: "atoz"
    })
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
