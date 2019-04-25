export const FETCH_MOM_EXPERIENCES = 'FETCH_MOM_EXPERIENCES'

export const experienceSuccessFetch =  () => dispatch => {
    dispatch({ type: FETCH_MOM_EXPERIENCES, payload: ['meg']})
}
