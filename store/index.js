
import { createStore, combineReducers } from 'redux';
import reducer from './reducers';

let reducers = combineReducers({
  userInfo: reducer,
});

const store = () => 
  createStore(reducers);

export default store;