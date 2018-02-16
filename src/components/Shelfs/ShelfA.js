import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom'

class ShelfA extends Component {
    render() {
        return (
            <div>
              <Link to='/'><h1>Home</h1></Link>
            </div>
        );
    }
}

export default ShelfA;