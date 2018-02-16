import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class Bin extends Component {
    constructor(props) {
        super(props);

        this.state={
            inputText2:'',
            inputText:'',
            product:'',
            price:'',
        }

    }
    handleInput(e){
        this.setState({inputText:e.target.value})
    }
    handleInput2(e){
        this.setState({inputText2:e.target.value})
    }
    changeProduct(){
        let text = this.state.inputText
        this.setState({product:text,
        price:this.state.inputText2})
        this.setState({inputText2:''})
        this.setState({inputText:''})
    }


    render() {
        console.log(this.state);
        let binId = this.props.match.params.binid.split('')
        


        return (
            <div>

                <Link to='/'><h1>Home</h1></Link>
                <Link to={`/shelf/${binId[0]}`}><h1>{`Shelf ${binId[0]}`}</h1></Link>
                <h1>{`Bin ${binId[1]}`} </h1>

                <p>name</p>
                <input value={this.state.inputText} onChange={(e)=>this.handleInput(e)} />
                <p>price</p>
                <input value={this.state.inputText2} onChange={(e)=>this.handleInput2(e)} />
                <section>
                    <button onClick={()=>this.changeProduct()}>save</button>
                    <button>delete</button>
                </section>
            </div>
        );
    }
}

export default Bin;