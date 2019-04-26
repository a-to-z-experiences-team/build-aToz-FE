import { 
    FETCH_MOM_EXPERIENCES_SUCCESS, FETCH_MOM_EXPERIENCES_FAIL
} from '../actions'

const initialstate ={
    momExperiences: [],
    error: ''
}


export const reducer = (state = initialstate, action) =>{
    switch (action.type){
        case FETCH_MOM_EXPERIENCES_SUCCESS:
        return {
          ...state,
          momExperiences: action.payload
        }
        case FETCH_MOM_EXPERIENCES_FAIL:
        return {
            ...state,
            error: action.payload
        }
        default:
          return state;
    }

}
