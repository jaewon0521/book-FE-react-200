import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class R089_reactRouter extends Component {
    render() {
        return (
            <div>
                <h1>path='/'</h1>
                <h3>R089_reactRoter</h3>
                <Link to={'/reactRouter2'}>reactRouter2</Link>
            </div>
        );
    }
}

export default R089_reactRouter;