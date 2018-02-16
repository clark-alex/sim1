import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Bin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            binId:'',
            shelfId: '',
            binNum: 0
        }

    }
    componentDidMount(){
        this.setState({binId:this.props.match.params.binid})
        console.log(this.props.match.params.binid)
    }
  

    splitter(){

    }


    render() {
        console.log("params",this.binId);
        let binId = this.props.match.params.binid.split('')
        


        return (
            <div>

                <Link to='/'><h1>Home</h1></Link>
                <Link to={`/shelf/${binId[0]}`}><h1>{`Shelf ${binId[0]}`}</h1></Link>
                <h1>{`Bin ${binId[1]}`} </h1>

                <p>name</p>
                <input />
                <p>price</p>
                <input />
                <section>
                    <button></button>
                    <button>delete</button>
                </section>
            </div>
        );
    }
}

export default Bin;