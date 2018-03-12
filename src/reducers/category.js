import { CATEGORY_LIST, CURRENT_CATEGORY } from '../types';


export const categoryReducer = ( state = [], action )=> {
    switch (action.type) {
        case CATEGORY_LIST:
            return action.data;
        default:
            return state;
    }
}

export const currentCategoryReducer = ( state = {}, action )=> {
    switch (action.type) {
        case CURRENT_CATEGORY:
            return action.data;
        default:
            return state;
    }
}