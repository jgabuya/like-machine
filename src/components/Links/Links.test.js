import React from 'react';
import ReactDOM from 'react-dom';
import Links from './Links';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
        links: []
    }

    ReactDOM.render(<Links {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
});