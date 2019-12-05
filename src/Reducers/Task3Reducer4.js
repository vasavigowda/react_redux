import *as ActionTypes from '../Actions/type';

const initialState={
    D:1
}
export default(state=initialState,action)=>{
    switch(action.type)
    {
        case ActionTypes.UPDATED:
                    {
                        return{...state,D:state.D+action.value};
                    }
                    break; 
                    default:
             return state;  
    }
}
