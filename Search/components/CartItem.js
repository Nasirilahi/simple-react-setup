import React, {Component} from 'react';
import {IntervalEnhance} from './IntervalEnhance.jsx';

class CartItem extends Component{
	constructor(props){
		super(props);
		 this.state = {
            qty: props.initialQty,
            image:props.image,
            title:props.title,
            price:props.price,
            total: 0
        };
	}
	componentWillMount(){
		this.recalculateTotal();
	}
	increaseQty(){
		this.setState({qty:this.state.qty + 1},this.recalculateTotal);
	}
    decreaseQty(){
    	let newQty = this.state.qty >0 ?this.state.qty-1 :0;
    	this.setState({qty:newQty},this.recalculateTotal);
    }
    recalculateTotal(){
    	this.setState({total :this.state.qty* this.props.price});
    }
 render() {
        return <article className="row large-4">
            <figure className="text-center">
                <p>
                    <img src={this.state.image}/>
                </p>
                <figcaption>
                    <h2>{this.state.title}</h2>
                </figcaption>
            </figure>
            <p className="large-4 column"><strong>Quantity: {this.state.qty}</strong></p>

            <p className="large-4 column">
                <button onClick={this.increaseQty.bind(this)}>+</button>
                <button onClick={this.decreaseQty.bind(this)}>-</button>
            </p>

            <p className="large-4 column"><strong>Price per item:</strong> ${this.state.price}</p>

            <h3 className="large-12 column text-center">
                Total: ${this.state.total}
            </h3>
            <p className="large-12 column">
                    <strong>Time elapsed for interval: </strong>
                    {this.props.seconds}
                </p>   
        </article>;
    }
}

export default IntervalEnhance(CartItem);