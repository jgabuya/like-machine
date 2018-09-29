import React from "react";
import LinkItem from "../components/LinkItem";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("LinkItem", () => {
    const props = {
        id: "test",
        title: "test",
        description: "test",
        url: "google.com/",
        imageUrl: "",
        createdAt: new Date().toISOString(),
        liked: false,
        likeCount: 0,
        owned: false,
        onLike: jest.fn(),
        onUnlike: jest.fn(),
        onDelete: jest.fn()
    };

    const wrapper = shallow(
        <LinkItem {...props} />
    );

    // it("matches snapshot", () => {
    //     const tree = renderer.create(<LinkItem {...props} />).toJSON();
    //     expect(tree).toMatchSnapshot();
    // });

    it("renders without crashing", () => {
        expect(wrapper.length).toEqual(1);        
    });
});
