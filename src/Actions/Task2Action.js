import *as ActionTypes from './type';

export function updateA(B){
    return function (dispatch)
    {
        dispatch({type:'UPDATEA',value:B});
    }
}

export function updateB(A){
    return function(dispatch)
    {
        dispatch({type:'UPDATEB',value:A});
    }
}