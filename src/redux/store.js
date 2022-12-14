import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './reducers/AuthReducer';
import ContactReducer from './reducers/ContactReducer';

const rootReducer = combineReducers({AuthReducer, ContactReducer});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
