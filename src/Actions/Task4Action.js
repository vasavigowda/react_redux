import *as ActionTypes from './type';

export function increment(){
    return function(dispatch)
    {
        dispatch({type:'increment',value:1});
    }
}
export function decrement(){
    return function(dispatch)
    {
        dispatch({type:'decrement',value:1});
    }
}
export function evnnumincrement(){
    return function(dispatch)
    {
        dispatch({type:'evnnumincrement',value:1});
    }
};