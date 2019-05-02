import axios from "axios";

export const FETCH_MOM_EXPERIENCES_SUCCESS = "FETCH_MOM_EXPERIENCES_SUCCESS";
export const FETCH_MOM_EXPERIENCES_FAIL = "FETCH_MOM_EXPERIENCES_FAIL";

export const experienceSuccessFetch = () => dispatch => {
  const headers =  {authorization: localStorage.getItem('token')}
  axios
    .get("https://webpt3-atoz-buildweek.herokuapp.com/api/atoz/home", {headers} )
    .then(res =>
      dispatch({ type: FETCH_MOM_EXPERIENCES_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: FETCH_MOM_EXPERIENCES_FAIL, payload: err }));
}

export const SEARCH_SUCCESS ='SEARCH_SUCCESS'
export const SEARCH_FAIL = 'SEARCH_FAIL'

export const searchExperiences = (search) => dispatch => {
   axios.get("https://webpt3-atoz-buildweek.herokuapp.com/api/atoz/home", search)
   .then(res => 
    dispatch({type: SEARCH_SUCCESS, payload: res.data})
    .catch(err => dispatch({type: SEARCH_FAIL, payload: err}))
    )
}

export const ADD_SELECTED_DATA = 'ADD_SELECTED_DATA'
export const ADD_SELECTED_FAIL = 'ADD_SELECTED_FAIL'

export const addSelectedData = (item) => dispatch => {
  dispatch({type: ADD_SELECTED_DATA, payload: item})
}

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });
  localStorage.removeItem("token");
  return axios
    .post("https://webpt3-atoz-buildweek.herokuapp.com/api/atoz/auth/login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.token);
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
export const ADD_EVENT_FAIL = "ADD_EVENT_FAIL";

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

export const postEvent = event => dispatch =>{
  const headers =  {authorization: localStorage.getItem('token')}
    axios
    .post("https://webpt3-atoz-buildweek.herokuapp.com/api/atoz/experience", headers, event )
    .then(res => {
      dispatch({type: ADD_EVENT, payload: res.data });
    })
    .catch(err => dispatch({ type: ADD_EVENT_FAIL, payload: err }))
    };

export const FETCHING_SIGNUP = "FETCHING_SIGNUP";
export const GET_SIGNUP = "GET_SIGNUP";
export const ADD_SIGNUP = "ADD_SIGNUP";
export const ADD_SIGNUP_FAIL = "ADD_SIGNUP_FAIL";

export const getSignUp = () => {
  const promise = axios.get("http://localhost:5000/api/login");

  return function(dispatch) {
    dispatch({ type: FETCHING_SIGNUP });
    promise.then(response => {
      console.log(response);
      dispatch({ type: GET_SIGNUP, payload: response.data });
    });
  };
};

export const postSignUp = SignUp => dispatch =>{
    axios.post("https://webpt3-atoz-buildweek.herokuapp.com/api/atoz/auth/register", SignUp)
    .then(res => {
      dispatch({type: ADD_SIGNUP, payload: res.data });
    })
    .catch(err => dispatch({ type: ADD_SIGNUP_FAIL, payload: err }))
  };