import { 
    FETCH_MOM_EXPERIENCES
} from '../actions'

const initialstate ={
    momExperiences: []
}


export const reducer = (state = initialstate, action) =>{
    switch (action.type){
        case FETCH_MOM_EXPERIENCES:
        return{
          ...state,
          err: action.payload,
          moms: action.payload
        }
        default:
          return state;
    }

}