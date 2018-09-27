import React from "react";
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

const LinkItem = props => {
	let likeIcon;
    let likeBtnTitle;
    let likeBtnOnClickHandler;

	if (props.liked) {
        likeIcon = <FaHeart />;
        likeBtnTitle = 'Unlike';
        likeBtnOnClickHandler = props.onUnlike
	} else {
        likeIcon = <FaRegHeart />;
        likeBtnTitle = "Like";
        likeBtnOnClickHandler = props.onLike;
	}

	return (
		<Card className="mb-5">
			{props.imageUrl !== null && (
				<CardImg
					top
					src={props.imageUrl}
					alt={props.title || props.url}
					style={{
						width: "100%",
						maxHeight: "20vw",
						objectFit: "cover"
					}}
				/>
			)}

			<CardBody>
				<CardTitle>
					<a target="_blank" href={normalizeUrl(props.url)}>
						{props.title || props.url}
					</a>
				</CardTitle>

				<CardSubtitle>{props.description}</CardSubtitle>

				<CardText>
					<small className="text-muted" title={props.createdAt}>
						{moment(props.createdAt)
							.startOf("day")
							.fromNow()}
					</small>
				</CardText>
			</CardBody>

			<CardFooter>
                <Button onClick={likeBtnOnClickHandler} outline color="primary" title={likeBtnTitle}>
					{likeIcon} <small>{props.likeCount}</small>
				</Button>

				{props.owned && (
					<Button
						onClick={props.onDelete}
						outline
						color="danger"
                        className="float-right"
                        title="Delete"
					>
						<FaRegTrashAlt />
					</Button>
				)}
			</CardFooter>
		</Card>
	);
};

LinkItem.propTypes = propTypes;

export default LinkItem;
