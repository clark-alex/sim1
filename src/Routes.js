import React from 'react';
import { Route, Switch } from 'react-router-dom'
// import ShelfA from './components/ShelfA.js'
// import ShelfB from './components/ShelfB.js'
// import ShelfC from './components/ShelfC.js'
// import ShelfD from './components/ShelfD.js'
import Home from './components/Home.js'
import Shelf from './components/Shelf.js'
import Bin from './components/Bin.js'
import Create from './components/Create.js'
//api/bins/a



export default (
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/shelf/:shelfid' component={Shelf} />
        <Route path='/bin/:binid' component={Bin} />
        <Route path='/create/:binid' component={Create} />


    </Switch>
)