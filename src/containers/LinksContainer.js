import React, { Component } from 'react';
import { Links } from '../components';
import { connect } from 'react-redux';
import fetchLinks from '../store/actions/fetch-links';

class LinksContainer extends Component {
    componentDidMount() {        
        this.props.fetchLinks()
    }
    
    render() {
        return (
            <Links links={ this.props.links } />
        );
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
    fetchLinks: fetchLinks
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksContainer);
