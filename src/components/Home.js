import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <Link to='/shelf/A'><p>Shelf A</p></Link>
                <Link to='/shelf/B'><p>Shelf B</p></Link>
                <Link to='/shelf/C'><p>Shelf C</p></Link>
                <Link to='/shelf/B'><p>Shelf D</p></Link>
            </div>
        );
    }
}

export default Home;