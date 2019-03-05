import { combineReducers } from 'redux';
import postReducer from './postReducer';
import readReducer from './readReducer';

export default combineReducers({
    postReducer,
    readReducer,
})
