import *as ActionTypes from '../Actions/type';


const initialState={
 bgcolor:''
} 

export default (state=initialState,action)=>{
    switch (action.type)
    {
        case ActionTypes.bgred: {
             return{...state,bgcolor:'red'}
                 }
        case ActionTypes.bgblue: {
             return{...state,bgcolor:'blue'}
                     }
       case ActionTypes.bgpink: {
             return{...state,bgcolor:'pink'}
                         }
       case ActionTypes.bggreen: {
            return{...state,bgcolor:'green'}
                             }
        case ActionTypes.bgviolet: {
                 return{...state,bgcolor:'violet'}
                                 }
         case ActionTypes.bgwhite: {
                return{...state,bgcolor:'white'}
                                                    }
        
     default:return state;
    }
}
