import React from "react";
import PropTypes from "prop-types";
import LinkItem from "./LinkItem";

import { sortLinksByLikeCountDesc } from "../util/data-operations";
import moment from "moment";
import { confirmAlert } from "react-confirm-alert";
import normalizeUrl from "normalize-url";

import "react-confirm-alert/src/react-confirm-alert.css";

const propTypes = {
    linkGroup: PropTypes.object.isRequired,
    user: PropTypes.any,
    onDelete: PropTypes.func.isRequired,
    onLike: PropTypes.func.isRequired,
    onUnlike: PropTypes.func.isRequired
};

const renderLinks = props => {
    return props.links.map((item, index) => {
        return (
            <LinkItem
                key={index}
                id={item.id}
                title={item.title}
                description={item.description}
                url={normalizeUrl(item.url)}
                imageUrl={item.image_url}
                createdAt={item.created_at}
                liked={item.liked}
                likeCount={item.like_count}
                owned={item.owned}
                user={props.user}
                onLike={() => {
                    props.onLike(item.id);
                }}
                onUnlike={() => {
                    props.onUnlike(item.id);
                }}
                onDelete={() => {
                    confirmAlert({
                        title: "Confirm delete",
                        message: "Are you sure?",
                        buttons: [
                            {
                                label: "Yes",
                                onClick: () => props.onDelete(item.id)
                            },
                            {
                                label: "No"
                            }
                        ]
                    });
                }}
            />
        );
    });
};

const LinkGroup = props => {
    return (
        <div>
            <h4 className="mb-3 text-muted">
                {moment.unix(props.linkGroup.timestamp).format("MMMM D, YYYY")}
            </h4>

            {renderLinks({
                links: sortLinksByLikeCountDesc(props.linkGroup.links),
                user: props.user,
                onLike: props.onLike,
                onUnlike: props.onUnlike,
                onDelete: props.onDelete
            })}
        </div>
    );
};

LinkGroup.propTypes = propTypes;

export default LinkGroup;