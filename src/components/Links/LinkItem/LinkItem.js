import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    CardImg
} from 'reactstrap';

import moment from 'moment';
import normalizeUrl from 'normalize-url';

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
	onDelete: PropTypes.func.isRequired
};

const LinkItem = (props) => {        
    return (
        <Card className="mb-5">
            { props.imageUrl !== null &&
                <CardImg 
                    top src={ props.imageUrl } 
                    alt={ props.title || props.url }
                    style={{ 
                        width: '100%',
                        maxHeight: '20vw',
                        objectFit: 'cover' 
                    }} 
                />
            }

            <CardBody>                
                <CardTitle>
                    <a target="_blank" href={ normalizeUrl(props.url) }>{ props.title || props.url }</a>
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