import React from "react";
import LinkForm from "../components/LinkForm";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("LinkForm", () => {
    const props = {
        onUrlInputChange: jest.fn(),
        onSubmit: jest.fn(),
        urlInputValue: ''
    };

    const component = <LinkForm {...props} />;
    const wrapper = shallow(component);

    it("matches snapshot", () => {
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders without crashing", () => {
        expect(wrapper.length).toEqual(1);
    });
});
