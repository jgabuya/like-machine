import React from 'react';
import { Links } from '../components';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Links', () => {
    const props = {
        links: []
    };

    it('matchesSnapshot', () => {
        const renderedValue = renderer.create(<Links {...props} />).toJSON();
        expect(renderedValue).toMatchSnapshot();
    })

    it('renders without crashing', () => {
        const wrapper = shallow(<Links {...props} />);
        expect(wrapper.length).toEqual(1);
    });    
})
