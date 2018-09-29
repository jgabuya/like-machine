import { UPDATE_FORM_DATA } from '../actions/types'; 

export default (state = {}, action) => {
    switch (action.type) {
        case UPDATE_FORM_DATA:
            return {...state, ...action.payload}
        default:    
            return state;
    }
}