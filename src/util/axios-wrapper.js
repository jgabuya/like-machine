import axios from 'axios';
import store from '../store';

axios.defaults.baseURL = "https://likemachine-api.nerdgeschoss.de";
axios.defaults.headers.common = {
    Authorization: "Bearer 00000000-0000-0000-0000-000000000000"
};

// use sessionId if user is logged in
store.subscribe(() => {
    const state = store.getState();

    if (state.user) {
        // axios.defaults.headers.common = { Authorization: `Bearer ${state.user.sessionId}` };
    }
});

export default axios;