import React from "react";
import PropTypes from "prop-types";
import LinkItem from "./LinkItem";

import { sortLinksByLikeCountDesc } from "../util/data-operations";
import moment from "moment";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const propTypes = {
    linkGroup: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onLike: PropTypes.func.isRequired,
    onUnlike: PropTypes.func.isRequired
};

const renderLinks = (links, onLike, onUnlike, onDelete) => {
    return links.map((item, index) => {
        return (
            <LinkItem
                key={index}
                id={item.id}
                title={item.title}
                description={item.description}
                url={item.url}
                imageUrl={item.image_url}
                createdAt={item.created_at}
                liked={item.liked}
                likeCount={item.like_count}
                owned={item.owned}
                onLike={() => {
                    onLike(item.id);
                }}
                onUnlike={() => {
                    onUnlike(item.id);
                }}
                onDelete={() => {
                    confirmAlert({
                        title: "Confirm delete",
                        message: "Are you sure?",
                        buttons: [
                            {
                                label: "Yes",
                                onClick: () => onDelete(item.id)
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

            {renderLinks(
                sortLinksByLikeCountDesc(props.linkGroup.links),
                props.onLike,
                props.onUnlike,
                props.onDelete
            )}
        </div>
    );
};

LinkGroup.propTypes = propTypes;

export default LinkGroup;
