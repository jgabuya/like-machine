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
import normalizeUrl from "normalize-url";

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
    state = {
        animatedLike: false
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            animatedLike: nextProps.liked && !this.props.liked
        });
    }

    render() {
        let LikeIcon;
        let likeBtnTitle;
        let likeBtnOnClickHandler;

        if (this.props.liked) {
            LikeIcon = FaHeart;
            likeBtnTitle = "Unlike";
            likeBtnOnClickHandler = this.props.onUnlike;
        } else {
            LikeIcon = FaRegHeart;
            likeBtnTitle = "Like";
            likeBtnOnClickHandler = this.props.onLike;
        }

        return (
            <Card className="mb-5">
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

                <CardBody>
                    <CardTitle>
                        <a target="_blank" href={normalizeUrl(this.props.url)}>
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

                {this.props.user && (
                    <CardFooter>
                        <Button
                            onClick={likeBtnOnClickHandler}
                            outline
                            color="primary"
                            title={likeBtnTitle}
                        >
                            <LikeIcon
                                className={
                                    this.state.animatedLike
                                        ? "animated bounce"
                                        : ""
                                }
                            />{" "}
                            <small>{this.props.likeCount}</small>
                        </Button>

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
