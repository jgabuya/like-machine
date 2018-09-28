import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import FacebookLogin from "react-facebook-login";
import LinksContainer from "./containers/LinksContainer";
import LinkFormContainer from "./containers/LinkFormContainer";

import { connect } from "react-redux";
import authenticateUser from "./store/actions/authenticate-user";

class App extends Component {
    renderSidebar() {
        let sidebar;

        if (this.props.user === null) {
            sidebar = (<FacebookLogin
                appId="1901771459907068"
                autoLoad={true}
                fields="name,email"
                callback={this.props.onAuthenticateUser}
            />);
        } else {
            sidebar = <LinkFormContainer />;
        }
        
        return sidebar;            
    }

    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col>
                            <h1>LikeMachine</h1>
                        </Col>
                    </Row>

                    {/* display form and link lists */}
                    <Row className="mt-4">
                        <Col md="8">
                            <LinksContainer />
                        </Col>

                        <Col md="4">
                            {this.renderSidebar()}
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col className="text-center text-muted">
                            <small>&copy; {new Date().getFullYear()}</small>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    onAuthenticateUser: authenticateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
