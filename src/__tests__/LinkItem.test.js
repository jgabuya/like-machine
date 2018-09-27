import React from 'react';
import LinkItem from '../components/Links/LinkItem/LinkItem';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('LinkItem', () => {
    const props = {
        id: 'test',
        title: 'test',
        description: 'test',
        url: 'www.google.com',
        createdAt: new Date().toLocaleDateString(),
        liked: false,
        likeCount: 0,
        owned: false,
        onLike: jest.fn(),
        onDelete: jest.fn()
    };

    it('matchesSnapshot', () => {
        const renderedValue = renderer.create(<LinkItem {...props} />).toJSON();
        expect(renderedValue).toMatchSnapshot();
    })

    it('renders without crashing', () => {
        const wrapper = shallow(<LinkItem {...props} />);   
        expect(wrapper.length).toEqual(1);
    });    
})
