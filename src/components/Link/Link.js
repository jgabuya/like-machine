import React, { Component } from 'react';
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

class Link extends Component {
    render() {
        return (
            <Card className="mb-5">
                <CardBody>
                    <CardTitle>
                        <a target="_blank" href={ normalizeUrl(this.props.url) }>{ this.props.title }</a>
                    </CardTitle>
                    <CardSubtitle>{ this.props.description }</CardSubtitle>
                    <CardText>
                        <small className="text-muted">{ moment(this.props.createdAt).startOf('day').fromNow() }</small>
                    </CardText>
                </CardBody>

                <CardFooter>
                    <Button onClick={ this.onLike } outline color="primary">Like</Button>
                    <Button onClick={ this.onDelete } outline color="danger" className="float-right">Delete</Button>
                </CardFooter>
            </Card> 
        );
    }
}

Link.propTypes = propTypes;

export default Link;