import *as ActionTypes from '../Actions/type';

const initialState={
    B:1
}
export default(state=initialState,action)=>{
    switch(action.type)
    {
        case ActionTypes.UPDATEB:
                    {
                        return{...state,B:state.B+action.value};
                    }
                    break; 
                    default:
             return state;  
    }
}
