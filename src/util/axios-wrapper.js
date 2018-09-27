import axios from 'axios';

axios.defaults.headers.common = {
    'Authorization': 'Bearer 00000000-0000-0000-0000-000000000000'
};

axios.defaults.baseURL = 'https://likemachine-api.nerdgeschoss.de';

export default axios;