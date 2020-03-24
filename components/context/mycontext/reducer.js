import {
    GET_USERS,
    GET_LOADING,
    SET_FIRSTNAME,
    SET_VALUES,
    SET_DEP,
    SET_AGE,
    SET_LASTNAME
} from '../mycontexttype'

export default (state , action , e)=>{
    switch(action.type){
        case SET_VALUES:
            
                return{
                    ...state,
                    user:{
                        ...state.user,
                        [action.payload.name]:action.payload.value
                    }
                }
            
           
        default:
            return state;
    }
}