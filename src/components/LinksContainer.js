import React, { Component } from 'react';
import Link from './Link/Link';

import axios from '../util/axios-wrapper'

class LinksContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            links: []
        }
    }

    async componentDidMount() {
        const result = await axios.get('/links');

        this.setState({
            links: result.data
        });
    }

    renderLinks() {
        return this.state.links.map((item, index) => {
            return (
                <Link
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
        })
    }
    
    render() {
        return (
            <div>
                { this.renderLinks() }
            </div>
        );
    }
}

export default LinksContainer;
