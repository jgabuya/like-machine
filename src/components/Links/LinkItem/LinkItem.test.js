import React from 'react';
import ReactDOM from 'react-dom';
import LinkItem from './LinkItem';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Link /> , div);
    ReactDOM.unmountComponentAtNode(div);
});