import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './reducers/AuthReducer';

const rootReducer = combineReducers({AuthReducer});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;