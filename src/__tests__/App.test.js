import React from 'react';
import App from '../App';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

describe('App', () => {
    const initialState = {};
    const mockStore = configureStore();

    let wrapper;
    let store;
    
    beforeAll(() => {
        store = mockStore(initialState);
        wrapper = shallow(<App store={ store } />);
    });

    it('renders without crashing', () => {
        expect(wrapper.length).toEqual(1);
    });
});