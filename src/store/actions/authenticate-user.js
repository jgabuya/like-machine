import { AUTHENTICATE_USER } from "./types";

export default (payload) => {
    return {
        type: AUTHENTICATE_USER,
        payload
    };
};