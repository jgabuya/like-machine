import axios from '../../util/axios-wrapper';
import {
    FETCH_LINKS
} from './types';

const fetchLinks = payload => {
    return {
        type: FETCH_LINKS,
        payload
    }
}

export default () => {
    return async dispatch => {
        try {
            const result = await axios.get('/links');
            return dispatch(fetchLinks(result.data));
        } catch (e) {
            console.log(e.message)
        }        
    }
}