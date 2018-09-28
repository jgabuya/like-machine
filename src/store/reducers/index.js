import {
    combineReducers
} from 'redux';
import linksReducer from './links-reducer';
import userReducer from './user-reducer';

export default combineReducers({
    links: linksReducer,
    user: userReducer
})