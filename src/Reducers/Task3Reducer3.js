import *as ActionTypes from '../Actions/type';

const initialState={
    C:1
}
export default(state=initialState,action)=>{
    switch(action.type)
    {
        case ActionTypes.UPDATEC:
                    {
                        return{...state,C:state.C+action.value};
                    }
                    break; 
                    default:
             return state;  
    }
}
