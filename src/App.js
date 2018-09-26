import React, { Component } from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button
} from 'reactstrap';

class App extends Component {
    render() {
         return (
            <div className="App">
                <Container>
                    <Row>
                        <Col><h1>LikeMachine</h1></Col>
                    </Row>

                    { /* display form and link lists */ }
                    <Row>
                        <Col md="8">
                            <Card>
                                <CardBody>
                                    <CardTitle>
                                        <a href="#">Link 1</a>
                                    </CardTitle>
                                    <CardSubtitle>Description goes here</CardSubtitle>
                                    <CardText>
                                        <small className="text-muted">by username 4 hours ago</small>
                                    </CardText>
                                </CardBody>

                                <CardFooter>
                                    <Button outline color="primary">Like</Button>
                                    <Button outline color="danger" className="float-right">Delete</Button>
                                </CardFooter>
                            </Card> 
                        </Col>

                        <Col md="4">
                            <Form>
                                <h4>New Link</h4>

                                <FormGroup>
                                    <Label for="input-title">Title</Label>
                                    <Input type="text" id="input-title" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="input-description">Description</Label>
                                    <Input type="textarea" id="input-description" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="input-title">URL</Label>
                                    <Input type="text" id="input-title" />
                                </FormGroup>
                            </Form>
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