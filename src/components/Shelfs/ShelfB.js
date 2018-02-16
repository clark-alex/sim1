import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom'

class ShelfB extends Component {
    render() {
        return (
            <div>
                <Link to='./App'><h1>ShelfB</h1></Link>
            </div>
        );
    }
}

export default ShelfB;