import {combineReducers} from 'redux';
import DailyGraphReducer from './AppleReducer.js';
import GoogleReducer from './GoogleReducer';


const reducer = combineReducers({
    DailyGraphReducer, GoogleReducer
});

export default reducer