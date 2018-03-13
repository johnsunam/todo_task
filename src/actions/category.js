import { CATEGORY_LIST, CURRENT_CATEGORY } from '../types'

export const addCategory = data => (dispatch, getState) => {
    data.items = 0;
    let datas = [...getState().categoryReducer];
    data.id = datas.length + 1;
    data.tasks = [];
    datas.push(data);
    dispatch({
        type: CATEGORY_LIST,
        data: datas
    })
    
}


export const  setCategory = data => ( dispatch, getState ) => {
    dispatch({
        type: CURRENT_CATEGORY,
        data
    })
}


export const editCategory = data => (dispatch, getState) => {
    dispatch({
        type: CATEGORY_LIST,
        data
    })
}