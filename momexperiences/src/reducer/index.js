import { 
  FETCH_MOM_EXPERIENCES_SUCCESS, 
  FETCH_MOM_EXPERIENCES_FAIL, 
  ADD_SELECTED_DATA, 
  ADD_SELECTED_FAIL, 
  ADD_SIGNUP, 
  SEARCH_FAIL,
  ADD_SIGNUP_FAIL,
  LOGIN_SUCCESS,
  ADD_EVENT_FAIL,
  FETCHING_EVENT,
  GET_EVENT,
  ADD_EVENT,
  UPDATED_OBJECTS,
  DELETED_STATE,
  DELETED_FAIL
} from '../actions'

const initialstate ={
  momExperiences: [],
  error: '',
  selectedCardData: [],
  userSignUp: [],
  deleted: ''
}

export const reducer = (state = initialstate, action) =>{
  switch (action.type){
      case FETCH_MOM_EXPERIENCES_SUCCESS:
      return {
        ...state,
        momExperiences:  action.payload
      }
      case FETCH_MOM_EXPERIENCES_FAIL:
      return {
          ...state,
          error: action.payload
      }
      case ADD_SELECTED_DATA:
      return {
        ...state,
        selectedCardData: action.payload
      }
      case ADD_SELECTED_FAIL:
      return {
        ...state,
        error: action.payload
      }
      case ADD_SIGNUP:
      return {
        ...state,
        userSignUp: action.payload
      }
      case SEARCH_FAIL:
      return {
        ...state,
        error: action.payload
      }
      case ADD_SIGNUP_FAIL:
      return {
        ...state,
        error: action.payload
      }
      case LOGIN_SUCCESS:
      return {
        ...state,
        userSignUp: action.payload
      }
      case ADD_EVENT:
      return {
        ...state,
        momExperiences:[ ...state, action.payload]
      }
      case ADD_EVENT_FAIL:
      return {
        ...state,
        error: action.payload
      }
      case GET_EVENT:
      return {
        ...state,
        selectedCardData: action.payload
      }
      case UPDATED_OBJECTS:
      return {
        ...state,
        momExperiences: action.payload
      }
      case DELETED_STATE:
      return {
        ...state,
        momExperiences:  action.payload,
        deleted: true
      }
      case DELETED_FAIL:
      return {
        ...state,
        error:  action.payload,
        deleted: false
      }
      default:
        return state;
  }
}





const initialState = {
  event: [],
  fetchingEvent: false,
  fetchedEvent: true,
  addingEvent: false,
  updatingEvent: false,
  deletingEvent: false,
  error: null
}

export const eventReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_EVENT:
    return Object.assign({}, state, {
      fetchingEvent: true,
      fetchedEvent: false,
      addingEvent: true
    });
    case ADD_EVENT:
    return Object.assign({}, state, {
      addingEvent: true
    })
    default:
    return state;
  }
}
