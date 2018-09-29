import React from "react";
import LinksContainer from "../containers/LinksContainer";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import configureStore from "redux-mock-store";

describe("LinksContainer", () => {
    let wrapper;
    let store;
    const initialState = { links: [], user: null, formData: { url: "" } };

    beforeEach(() => {
        store = configureStore()(initialState);
        wrapper = shallow(<LinksContainer store={store} />);
    });

    it("renders without crashing", () => {
        expect(wrapper.length).toBe(1);
    });

    it("matches snapshot", () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
