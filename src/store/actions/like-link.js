import axios from "../../util/axios-wrapper";
import { LIKE_LINK } from "./types";

const likeLink = payload => {
	return {
		type: LIKE_LINK,
		payload
	};
};

export default (id) => {
	return async dispatch => {
		try {
			await axios.post(`/links/${id}/like`);
			return dispatch(likeLink({ id }));
		} catch (e) {
			console.log(e.message);
		}
	};
};