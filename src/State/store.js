import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './constraints/constraints';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;


