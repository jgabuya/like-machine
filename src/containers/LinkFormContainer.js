import React, { Component } from "react";
import { connect } from "react-redux";
import LinkForm from "../components/LinkForm";
import postLink from "../store/actions/post-link";

class LinkFormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: ""
        };

        this.onUrlChange = this.onUrlChange.bind(this);
    }

    onUrlChange(e) {
        this.setState({ url: e.target.value });
    }

    render() {
        return <div>
            <p className="text-muted">Welcome, {this.props.user.name}</p>

                <LinkForm className="mt-4" onUrlChange={this.onUrlChange} onSubmit={e => {
                        e.preventDefault();
                        this.props.onSubmit(this.state);
                    }} />
            </div>;
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    onSubmit: postLink
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LinkFormContainer);
