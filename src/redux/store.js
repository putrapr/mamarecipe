import { createStore, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
// import logger from 'redux-logger'
import rootReducer from './reducer'

// const store = createStore(rootReducer, applyMiddleware(thunk, logger))
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store