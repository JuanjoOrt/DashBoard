import * as storage from 'redux-storage';
import reducers from '../reducers';
import { createStore, applyMiddleware, combineReducers }from 'redux';
import createEngine from 'redux-storage-engine-localstorage';
const reducer = storage.reducer(combineReducers(reducers));
const engine = createEngine('my-save-key');
const middleware = storage.createMiddleware(engine);
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);

const store = createStoreWithMiddleware(reducers);
export default store;