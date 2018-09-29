import {
    combineReducers
} from 'redux';
import linksReducer from './links-reducer';
import userReducer from './user-reducer';
import formDataReducer from './form-data-reducer';

export default combineReducers({
    links: linksReducer,
    user: userReducer,
    formData: formDataReducer
})