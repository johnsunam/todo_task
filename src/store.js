import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { combineReducers } from 'redux'
import { categoryReducer, currentCategoryReducer } from './reducers/category'

const rootReducer = combineReducers({
    rootReducer,
    categoryReducer,
    currentCategoryReducer
})

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]


if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension
  
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }



const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store