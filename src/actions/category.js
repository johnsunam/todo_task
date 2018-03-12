import { CATEGORY_LIST } from '../types'

export const addCategory = data => (dispatch, getState) => {
    data.items = 0;
    
    let datas =[...getState().categoryReducer];
    data.id =datas.length + 1;
    datas.push(data);
    dispatch({
        type: CATEGORY_LIST,
        data: datas
    })
    
}