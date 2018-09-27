import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button
} from 'reactstrap';

import moment from 'moment';
import normalizeUrl from 'normalize-url';

const propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    likeCount: PropTypes.number.isRequired,
    owned: PropTypes.bool.isRequired,
    onLike: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

const LinkItem = (props) => {        
    return (
        <Card className="mb-5">
            <CardBody>
                <CardTitle>
                    <a target="_blank" href={ normalizeUrl(props.url) }>{ props.title }</a>
                </CardTitle>
                <CardSubtitle>{ props.description }</CardSubtitle>
                <CardText>
                    <small className="text-muted">{ moment(props.createdAt).startOf('day').fromNow() }</small>
                </CardText>
            </CardBody>

            <CardFooter>
                <Button onClick={ props.onLike } outline color="primary">Like</Button>
                <Button onClick={ props.onDelete } outline color="danger" className="float-right">Delete</Button>
            </CardFooter>
        </Card> 
    );
}

LinkItem.propTypes = propTypes;

export default LinkItem;