import React from "react";
import LinkFormContainer from "../containers/LinkFormContainer";
import { shallow } from "enzyme";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";

describe("LinkFormContainer", () => {
    let component;
    let wrapper;
    let store;

    const initialState = {
        onUrlInputChange: jest.fn(),
        formData: { url: "" },
        user: { name: "" }
    };

    beforeEach(() => {
        store = configureStore([thunk])(initialState);
        component = <LinkFormContainer store={store} />;
        wrapper = shallow(component);
    });

    it("renders without crashing", () => {
        expect(wrapper.length).toBe(1);
    });

    it("matches snapshot", () => {
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
