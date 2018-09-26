import React from 'react';
import ReactDOM from 'react-dom';
import LinksContainer from './LinksContainer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LinksContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
});