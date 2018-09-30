import React from "react";
import LinkGroup from "../components/LinkGroup";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import moment from 'moment';

describe("LinkGroup", () => {
    const props = {
        linkGroup: { timestamp: moment('1970-01-01').unix(), links: [] },
        user: null,
        onDelete: jest.fn(),
        onLike: jest.fn(),
        onUnlike: jest.fn()
    };

    const component = <LinkGroup {...props} />;
    const wrapper = shallow(component);

    it("matches snapshot", () => {
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders without crashing", () => {
        expect(wrapper.length).toEqual(1);
    });
});
