import {
    combineReducers
} from 'redux';
import linksReducer from './links-reducer';

export default combineReducers({
    links: linksReducer,
    userIsLoggedIn: (state = false, action) => state
})