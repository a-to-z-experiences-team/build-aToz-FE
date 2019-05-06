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
  DELETED_FAIL,
  GET_SINGLE_EXPERIENCE,
  GET_SINGLE_EXPERIENCE_FAIL,
  EDIT_EVENT_SUCCESS,
  EDIT_EVENT_FAIL,
  GET_USER,
  GET_USER_FAIL,
  USER_EVENTS,
  USER_EVENTS_FAIL
} from '../actions'

const initialstate ={
  momExperiences: [],
  error: '',
  selectedCardData: [],
  userSignUp: [],
  deleted: '',
  singleEvent: [],
  profileCard: [],
  userEvents: []
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
      case GET_SINGLE_EXPERIENCE:
      return {
        ...state,
        singleEvent:  action.payload,
      }
      case GET_SINGLE_EXPERIENCE_FAIL:
      return {
        ...state,
        error:  action.payload,
      }
      case EDIT_EVENT_SUCCESS:
      return {
        ...state,
        singleEvent: action.payload,
      }
      case EDIT_EVENT_FAIL:
      return {
        ...state,
        error:  action.payload,
      }
      case GET_USER:
      return {
        ...state,
        profileCard:  action.payload,
      }
      case GET_USER_FAIL:
      return {
        ...state,
        error:  action.payload,
      }
      case USER_EVENTS:
      return {
        userEvents:  action.payload
      }
      case USER_EVENTS_FAIL:
      return {
        ...state,
        error:  action.payload,
      }
      default:
        return state;
  }
}


