import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {todoReducer} from './todoReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    todo: todoReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


export default store