import { CHANGE_INPUT_VALUE, DELETE_ITEM, ADD_ITEM, INITIAL_LIST } from './actionTypes';
import axios from 'axios';

export const getChangeInputValue = (value) => {
    return {
        type:CHANGE_INPUT_VALUE,
        value
    }
}
// export const getAddItem = () => {
//     return {
//         type:ADD_ITEM
//     }
// }
export const getAddItem = () => ({ type:ADD_ITEM })

export const getDeleteItem = index => {
    return {
        type:DELETE_ITEM,
        index
    }
}
export const getInitialList = data => {
    return {
        type:INITIAL_LIST,
        data
    }
}
export const getlList = () => {
    return (dispatch) => {
        axios.get('/list/list.json').then( (res) => {
           const data = res.data;
           const action = getInitialList(data);
           dispatch(action);
          })
    }
}
console.log(getlList())