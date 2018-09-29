import { AUTHENTICATE_USER } from "./types";
import axios from "axios";

const authenticateUser = (payload) => {
    return { type: AUTHENTICATE_USER, payload };
};

const getSession = async (facebookAccessToken) => {
    const result = await axios.post('/session', {
        facebook_token: facebookAccessToken
    });

    return result.data;
}

export default (payload) => {
    return async dispatch => {
        try {
            const session = await getSession(payload.accessToken);
            payload.sessionId = session.id;
            payload.userId = session.user_id;
            
            return dispatch(authenticateUser(payload));
        } catch (e) {
            console.log(e.message);
        }
    };
};