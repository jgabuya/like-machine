import {
    FETCH_LINKS,
    POST_LINK,
    DELETE_LINK,
    LIKE_LINK,
    UNLIKE_LINK
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_LINKS:
            return action.payload;

        case POST_LINK:
            return [
                ...state,
                action.payload
            ];

        case DELETE_LINK:
            return state.filter(item => {
                return item.id !== action.payload.id
            });

        case LIKE_LINK:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return Object.assign(item, { liked: true, like_count: ++item.like_count });
                }

                return item
            }); 

        case UNLIKE_LINK:
            return state.map(item => {
				if (item.id === action.payload.id) {
					return Object.assign(item, {
						liked: false,
						like_count: --item.like_count
					});
				}

				return item;
			}); 

        default:
            return state;
    }
}