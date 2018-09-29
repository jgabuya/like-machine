import axios from "../../util/axios-wrapper";
import { POST_LINK } from "./types";
import updateFormData from "./update-form-data";

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

            // clear form data
            dispatch(updateFormData({ url: '' }));

			return dispatch(postLink(result.data));
		} catch (e) {
			console.log(e.message);
		}
	};
};