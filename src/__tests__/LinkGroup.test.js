import React from "react";
import LinkGroup from "../components/LinkGroup";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import moment from 'moment';

describe("LinkGroup", () => {
    const props = {
        linkGroup: { timestamp: moment().unix(), links: [] },
        user: null,
        onDelete: jest.fn(),
        onLike: jest.fn(),
        onUnlike: jest.fn()
    };

    const wrapper = shallow(<LinkGroup {...props} />);

    it("matches snapshot", () => {
        const tree = renderer.create(<LinkGroup {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("renders without crashing", () => {
        expect(wrapper.length).toEqual(1);
    });
});
