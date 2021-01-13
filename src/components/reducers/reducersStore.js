import {combineReducers, createStore} from 'redux'
import {reducersValue} from './reducersValue'

const reducers = combineReducers({
    reducersValue
})


export const store = createStore(reducers)