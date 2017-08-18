import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

// DEBUGGING:
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = (initialState) => createStore(rootReducer, initialState, composeEnhancers(
//   applyMiddleware(thunk)
// ));
const store = (initialState) => createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
