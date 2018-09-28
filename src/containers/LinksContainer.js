import React, { Component } from "react";
import LinkGroup from "../components/LinkGroup";

import { connect } from "react-redux";

import fetchLinks from "../store/actions/fetch-links";
import deleteLink from "../store/actions/delete-link";
import likeLink from "../store/actions/like-link";
import unlikeLink from "../store/actions/unlike-link";
import { groupLinksByDayTimestamp } from "../util/data-operations";

class LinksContainer extends Component {
    componentDidMount() {
        this.props.fetchLinks();
    }

    renderLinkGroups(linkGroups) {
        return linkGroups.map((item, index) => {
            return (
                <LinkGroup
                    className="mb-5"
                    key={index}
                    linkGroup={item}
                    user={this.props.user}
                    onDelete={this.props.onDelete}
                    onLike={this.props.onLike}
                    onUnlike={this.props.onUnlike}
                />
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderLinkGroups(
                    groupLinksByDayTimestamp(this.props.links)
                )}
            </div>
        );
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    fetchLinks,
    onDelete: deleteLink,
    onLike: likeLink,
    onUnlike: unlikeLink
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LinksContainer);
