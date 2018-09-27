import React from 'react';
import PropTypes from 'prop-types';
import LinkItem from './LinkItem/LinkItem';

const propTypes = {
    links: PropTypes.array.isRequired    
};

const renderLinks = links => {
    return links.map((item, index) => {
        return (
            <LinkItem
                key={ index }
                id={ item.id }
                title={ item.title }
                description={ item.description }
                url={ item.url }
                createdAt={ item.created_at }
                liked={ item.liked }
                likeCount={ item.like_count }
                owned={ item.owned }
                onLike={ () => {} }
                onDelete={ () => {} }
            />
        )
    });
}

const Links = props => {
    return (
        <div>
            { renderLinks(props.links) }
        </div>
    );
}

Links.propTypes = propTypes;

export default Links;