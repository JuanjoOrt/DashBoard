import {combineReducers} from 'redux';
import DailyGraphReducer from './AppleReducer.js';
import GoogleReducer from './GoogleReducer';
import MicrosoftReducer from './MicrosoftReducer';


const reducer = combineReducers({
    DailyGraphReducer, GoogleReducer, MicrosoftReducer
});

export default reducer