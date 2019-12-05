import *as ActionTypes from './type';

export function updateA(C){
    return function (dispatch)
    {
        dispatch({type:'UPDATEA',value:C});
    }
}

export function updateB(D){
    return function(dispatch)
    {
        dispatch({type:'UPDATEB',value:D});
    }
}
export function updateC(A){
    return function(dispatch)
    {
        dispatch({type:'UPDATEC',value:A});
    }
}
export function updateD(B){
    return function(dispatch)
    {
        dispatch({type:'UPDATED',value:B});
    }
}