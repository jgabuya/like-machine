import React, { Component } from "react";
import { Links } from "../components";

import { connect } from "react-redux";
import fetchLinks from "../store/actions/fetch-links";
import deleteLink from "../store/actions/delete-link";
import likeLink from "../store/actions/like-link";
import unlikeLink from "../store/actions/unlike-link";

class LinksContainer extends Component {
	componentDidMount() {
		this.props.fetchLinks();
	}

	render() {
		return (
			<Links
				links={this.props.links}
                onDelete={this.props.onDelete}
                onLike={this.props.onLike}
                onUnlike={this.props.onUnlike}
			/>
		);
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
	fetchLinks: fetchLinks,
	onDelete: deleteLink,
    onLike: likeLink,
    onUnlike: unlikeLink
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LinksContainer);
