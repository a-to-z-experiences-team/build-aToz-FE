import axios from "axios";

export const FETCH_MOM_EXPERIENCES_SUCCESS = "FETCH_MOM_EXPERIENCES_SUCCESS";
export const FETCH_MOM_EXPERIENCES_FAIL = "FETCH_MOM_EXPERIENCES_FAIL";

export const experienceSuccessFetch = () => dispatch => {
  axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then(res =>
      dispatch({ type: FETCH_MOM_EXPERIENCES_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: FETCH_MOM_EXPERIENCES_FAIL, payload: err }));
};

export const SEARCH_SUCCESS ='SEARCH_SUCCESS'
export const SEARCH_FAIL = 'SEARCH_FAIL'

export const searchExperiences = (search) => dispatch => {
   axios.get("https://jsonplaceholder.typicode.com/comments", search)
   .then(res => 
    dispatch({type: SEARCH_SUCCESS, payload: res.data})
    .catch(err => dispatch({type: SEARCH_FAIL, payload: err}))
    )
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

export const FETCHING_EVENT = "FETCHING_EVENT";
export const GET_EVENT = "GET_EVENT";
export const ADD_EVENT = "ADD_EVENT";

export const getEvent = () => {
  const promise = axios.get("http://localhost:5000/api/login");

  return function(dispatch) {
    dispatch({ type: FETCHING_EVENT });
    promise.then(response => {
      console.log(response);
      dispatch({ type: GET_EVENT, payload: response.data });
    });
  };
};

export const postEvent = event => {
  return function(dispatch) {
    dispatch({ type: ADD_EVENT });
    axios.post("http://localhost:5000/api/login", event).then(response => {
      dispatch(getEvent());
    });
  };
};


