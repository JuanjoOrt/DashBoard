import reducers from '../reducers';
import { createStore, applyMiddleware, combineReducers, compose }from 'redux';
import thunk from 'redux-thunk'


const createStoreWithMiddleware = compose(
    applyMiddleware(thunk)
)(createStore);

export default function createStorage() {
    return createStoreWithMiddleware(reducers);
}


