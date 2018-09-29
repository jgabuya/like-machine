import React from "react";
import LinkItem from "../components/LinkItem";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

describe("LinkItem", () => {
    const props = {
        id: "test",
        title: "test",
        description: "test",
        url: "www.google.com",
        imageUrl: "",
        createdAt: "",
        liked: false,
        likeCount: 0,
        owned: false,
        onLike: jest.fn(),
        onUnlike: jest.fn(),
        onDelete: jest.fn()
    };

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LinkItem {...props} />);
    });

    it("matches snapshot", () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it("renders without crashing", () => {
        expect(wrapper.length).toEqual(1);
    });
});
