import React from "react";
import LinksContainer from "../containers/LinksContainer";
import { shallow } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";

describe("LinksContainer", () => {
    let wrapper;
    let store;
    const initialState = { links: [], user: null, formData: { url: "" } };

    beforeEach(() => {
        store = configureStore([thunk])(initialState);
        wrapper = shallow(<LinksContainer store={store} />);
    });

    it("renders without crashing", () => {
        expect(wrapper.length).toBe(1);
    });

    it("matches snapshot", () => {
        const tree = renderer.create(<LinksContainer store={store} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
