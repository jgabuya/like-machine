import React, { Component } from "react";
import { Links } from "../components";

import { connect } from "react-redux";
import fetchLinks from "../store/actions/fetch-links";
import deleteLink from "../store/actions/delete-link";

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
			/>
		);
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
	fetchLinks: fetchLinks,
	onDelete: deleteLink,
	onLike: () => {}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LinksContainer);
