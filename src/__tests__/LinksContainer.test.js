import React from 'react';
import LinksContainer from '../containers/LinksContainer/LinksContainer';

describe('LinksContainer', () => {
    const store = createStore

    beforeAll(() => {
        
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render( <LinksContainer / > , div);
        ReactDOM.unmountComponentAtNode(div);
    });
})