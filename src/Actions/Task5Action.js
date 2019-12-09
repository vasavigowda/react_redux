import *as ActionTypes from './type';

export function red(){
    return function(dispatch)
    {
        dispatch({type:'bgred'});
    }
}
export function blue(){
    return function(dispatch)
    {
        dispatch({type:'bgblue'});
    }
}
export function pink(){
    return function(dispatch)
    {
        dispatch({type:'bgpink'});
    }
}
export function green(){
    return function(dispatch)
    {
        dispatch({type:'bggreen'});
    }
}
export function violet(){
    return function(dispatch)
    {
        dispatch({type:'bgviolet'});
    }
}
export function white(){
    return function(dispatch)
    {
        dispatch({type:'bgwhite'});
    }
}