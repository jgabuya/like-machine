import axios from "../../util/axios-wrapper";
import { UNLIKE_LINK } from "./types";

const unlikeLink = payload => {
	return {
		type: UNLIKE_LINK,
		payload
	};
};

export default (id) => {
	return async dispatch => {
		try {
			await axios.delete(`/links/${id}/like`);
			return dispatch(unlikeLink({ id }));
		} catch (e) {
			console.log(e.message);
		}
	};
};