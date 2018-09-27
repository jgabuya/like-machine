import axios from "../../util/axios-wrapper";
import { DELETE_LINK } from "./types";

const deleteLink = payload => {
	return {
		type: DELETE_LINK,
		payload
	};
};

export default (id) => {
	return async dispatch => {
		try {
			await axios.delete(`/links/${id}`);
			return dispatch(deleteLink({ id }));
		} catch (e) {
			console.log(e.message);
		}
	};
};