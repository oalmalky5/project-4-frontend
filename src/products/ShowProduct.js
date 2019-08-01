import React, {Component} from 'react';
import {show, destroy} from './api'
import {Link, withRouter} from 'react-router-dom'
class ShowProduct extends Component{
    state =  {
        product:[]
    }


componentDidMount(){
    const user = this.props.user;
    const productId = this.props.match.params.id
    show(user, productId)
    .then((response) => {
        console.log(response)
        console.log("response")
        const showProduct  =  response.data.product;
        this.setState({
            product: showProduct
        })
    })
    .catch((error) => console.log(error))
}


render(){
    return(
        // <h1>{this.state.product.name}</h1>

        <div>
            <div className="Product-Image-Wrapper ">
                <img src={this.state.product.imageURL} alt={this.state.product.name} className="Product-Image" />
            </div>

            <div className="Product-Title text-danger "  >
                <p className="Product-Name">{this.state.product.name}</p>
            </div>        
            <div className="Product-Data">
                <small className="Product-Price">${this.state.product.price}</small>
                <button className="product-button Product-Add">Add to Cart</button>

           </div>
        </div>
    )
}
}

export default withRouter(ShowProduct)