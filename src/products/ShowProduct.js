import React, {Component} from 'react';
import {show} from './api'

class ShowProduct extends Component{
    state =  {
        product:{}
    }


componentDidMount(){
    const user = this.props.user;
    const productId = this.props.productId
    show(user, productId)
    .then((response) => {
        const showProduct  =  response.data.product;
        this.ListeningStateChangedEvent({
            product: showProduct
        })
    })
    .catch((error) => console.log(error))
}

render(){
    return(
        <div>
            <h1>{this.state.product.title}</h1>
            <img src={this.state.product.imageUrl} alt="" />
        </div>
    )
}
}

export default ShowProduct