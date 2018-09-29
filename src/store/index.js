import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

let store;

if (!store) {
    const initialState = {
        links: [],
        user: null,
        formData: {
            url: ""
        }
    };

    const middleware = [thunk];

    store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}

export default store;