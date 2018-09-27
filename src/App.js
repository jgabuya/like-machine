import React, { Component } from 'react';
import {
    Container,
    Row,
    Col    
} from 'reactstrap';

import { LinksContainer, LinkFormContainer } from './containers';

class App extends Component {
    render() {
         return (
            <div className="App">
                <Container>
                    <Row>
                        <Col><h1>LikeMachine</h1></Col>
                    </Row>

                    { /* display form and link lists */ }
                    <Row className="mt-4">
                        <Col md="8">
                            <LinksContainer />
                        </Col>

                        <Col md="4">
                            <LinkFormContainer />
                        </Col>                    
                    </Row>

                    <Row className="mt-5">
                        <Col className="text-center text-muted">
                            <small>&copy; { new Date().getFullYear() }</small>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;