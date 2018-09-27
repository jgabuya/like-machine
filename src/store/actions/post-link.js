import axios from "../../util/axios-wrapper";
import { POST_LINK } from "./types";

const postLink = payload => {
	return {
		type: POST_LINK,
		payload
	};
};

export default (data) => {
	return async dispatch => {
		try {
			const result = await axios.post("/links", data);
			return dispatch(postLink(result.data));
		} catch (e) {
			console.log(e.message);
		}
	};
};