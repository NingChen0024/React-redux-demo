import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// npm install --save redux-devtools-extension
// npm install axios redux-thunk


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger,thunk)))

export default store

