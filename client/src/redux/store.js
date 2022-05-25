import { applyMiddleware, createStore } from 'redux'
import miReducer from './reducer'
import thunk from 'redux-thunk'

const miStore = createStore(miReducer, applyMiddleware(thunk))

export default miStore
