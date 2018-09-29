import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    CardImg
} from "reactstrap";
import { FaHeart, FaRegHeart, FaRegTrashAlt } from "react-icons/fa";

import moment from "moment";

import "animate.css";

const propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    likeCount: PropTypes.number.isRequired,
    owned: PropTypes.bool.isRequired,
    onLike: PropTypes.func.isRequired,
    onUnlike: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

class LinkItem extends Component {
    /* 
    This was originally intented to be a pure/presentational component with props as the only data source
    however there was a bug (https://github.com/jgabuya/like-machine/issues/9) where a link item "jumps"
    on top of the list when "liked". It's because the like button click handler (passed down as prop) fires a 
    redux action, which generates a new state tree and triggers a re-render of the parent container component 
    LinksContainer as it subscribes to store state changes
    
    button click -> fire redux action -> reducer changes "liked" property of target object -> LinksContainer re-renders
    
    The solution I arrived at is:
    
    1. Contain internal state that tells whether user "likes" or "unlikes" the
    item. 
    2. Make the reducer NOT update the "liked" prop of target object in state tree, while at the same time still 
    calling the "like" API endpoint so the item will retain the "liked" status on the next refresh

    This way, when a user clicks on the "like" button the parent LinksContainer will not re-render
    */
    state = {
        liked: false,
        likeCount: 0,
        likeButtonHasBeenClickedOnce: false // tells whether the like button has been clicked at least once
    };

    constructor(props) {
        super(props);

        this.onLikeButtonClick = this.onLikeButtonClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            liked: nextProps.liked,
            likeCount: nextProps.likeCount
        });
    }

    updateLikeCount() {
        let likeCount = this.state.likeCount;

        if (this.state.liked) likeCount++;
        else likeCount--;

        this.setState({
            likeCount
        });
    }

    onLikeButtonClick() {
        // toggle liked state
        this.setState(
            {
                liked: !this.state.liked,
                likeButtonHasBeenClickedOnce: true
            },
            () => {
                this.updateLikeCount();

                if (this.state.liked) this.props.onLike();
                else this.props.onUnlike();
            }
        );
    }

    renderLikeBtn() {
        let LikeIcon;
        let likeBtnTitle;

        if (this.state.liked) {
            LikeIcon = FaHeart;
            likeBtnTitle = "Unlike";
        } else {
            LikeIcon = FaRegHeart;
            likeBtnTitle = "Like";
        }

        return (
            <Button
                onClick={this.onLikeButtonClick}
                outline
                color="primary"
                title={likeBtnTitle}
            >
                <LikeIcon
                    className={
                        this.state.liked &&
                        this.state.likeButtonHasBeenClickedOnce
                            ? "animated bounce"
                            : ""
                    }
                />{" "}
                <small>{this.state.likeCount}</small>
            </Button>
        );
    }

    render() {
        return (
            <Card className="mb-5">
                {/*  Item image */}
                {this.props.imageUrl !== null && (
                    <CardImg
                        top
                        src={this.props.imageUrl}
                        alt={this.props.title || this.props.url}
                        style={{
                            width: "100%",
                            maxHeight: "20vw",
                            objectFit: "cover"
                        }}
                    />
                )}

                {/* Item details */}
                <CardBody>
                    <CardTitle>
                        <a target="_blank" href={this.props.url}>
                            {this.props.title || this.props.url}
                        </a>
                    </CardTitle>

                    <CardSubtitle>{this.props.description}</CardSubtitle>

                    <CardText>
                        <small
                            className="text-muted"
                            title={this.props.createdAt}
                        >
                            {moment(this.props.createdAt)
                                .startOf("day")
                                .fromNow()}
                        </small>
                    </CardText>
                </CardBody>

                {/* Action buttons */}
                {this.props.user && (
                    <CardFooter>
                        {this.renderLikeBtn()}

                        {this.props.owned && (
                            <Button
                                onClick={this.props.onDelete}
                                outline
                                color="danger"
                                className="float-right"
                                title="Delete"
                            >
                                <FaRegTrashAlt />
                            </Button>
                        )}
                    </CardFooter>
                )}
            </Card>
        );
    }
}

LinkItem.propTypes = propTypes;

export default LinkItem;