import *as ActionTypes from '../Actions/type';
 
const initialState={
   A:1
};
export default(state=initialState,action)=>{
    switch(action.type)
    {
        case ActionTypes.UPDATEA:
            {
                return{...state,A:state.A+action.value};
            }
            break;
            default:
             return state;   
    }
}
