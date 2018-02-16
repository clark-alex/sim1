import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom'

class ShelfC extends Component {
    render() {
        return (
            <div>
                <Link to='./App'><h1>ShelfC</h1></Link>
            </div>
        );
    }
}

export default ShelfC;