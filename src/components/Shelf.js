import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Shelf extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            shelf:''
        }
    }
    
   
    render() {
        let shelfId = this.props.match.params.shelfid
        return (
            <div>
                <h1>Shelf {`${shelfId}`}</h1>
                <Link to='/'><h1>Home</h1></Link>
                <Link to={`/bin/${shelfId}1`}> <p>Bin 1 </p> </Link>
                <Link to={`/bin/${shelfId}2`}> <p>Bin 2 </p> </Link>
                <Link to={`/bin/${shelfId}3`}> <p>Bin 3 </p> </Link>
                <Link to={`/bin/${shelfId}4`}> <p>Bin 4 </p> </Link>
                <Link to={`/bin/${shelfId}5`}> <p>Bin 5 </p> </Link>
                <Link to={`/bin/${shelfId}6`}> <p>Bin 6 </p> </Link>  
            </div>
        );
    }
}

export default Shelf;