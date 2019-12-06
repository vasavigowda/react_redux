import  *as ActionTypes from '../Actions/type';


const initialState={                       
    Num:1
}
export default (state=initialState,action)=>{
    switch(action.type)
    {
        case ActionTypes.increment:
                    {
                        return{...state,Num:state.Num+action.value};
                    }
                    break; 
        case ActionTypes.decrement:
                    {
                        return{...state,Num:state.Num-action.value};
                    }
                    break;
         case ActionTypes.evnnumincrement:
                    {
                     if(state.Num%2==0){
                        return{...state,Num:state.Num+action.value};
                   
                    }
                    
                }
        default: return state;
                     
    }  
 }
        
    