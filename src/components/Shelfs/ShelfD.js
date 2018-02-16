import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom'

class ShelfD extends Component {
    render() {
        return (
            <div>
                <Link to='./App'><h1>ShelfD</h1></Link>
            </div>
        );
    }
}

export default ShelfD;