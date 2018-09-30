import React, { Component } from "react";
import { connect } from "react-redux";
import LinkForm from "../components/LinkForm";
import postLink from "../store/actions/post-link";
import updateFormData from "../store/actions/update-form-data";

class LinkFormContainer extends Component {
    render() {
        return (
            <div>
                <p className="text-muted">Welcome, {this.props.user.name}</p>

                <LinkForm
                    className="mt-4"
                    onUrlInputChange={e => {
                        this.props.onUrlInputChange({
                            url: e.target.value
                        });
                    }}
                    urlInputValue={this.props.formData.url}
                    onSubmit={e => {
                        e.preventDefault();
                        this.props.onSubmit(this.props.formData);
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    onSubmit: postLink,
    onUrlInputChange: updateFormData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LinkFormContainer);
