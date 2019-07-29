import React, {Component} from 'react';
import {index,destroy} from '../api'
import {Link} from 'react-router-dom';
import "./IndexProduct.css";


class IndexProduct extends Component{
    state={
        products: []
    }

    componentDidMount(){
        const user  = this.props.user
        index(user) 
        .then(response =>  {
            // console.log(response)
            const allProducts =  response.data.products;
            console.log(allProducts)
            this.setState({
                products:allProducts
            })
        })
        .catch((error) => console.log(error))  

    
    }

    destroy = (productId) => {
        const user =  this.props.user
        destroy(user,productId)
        .then(() =>  alert('deleted'))
        .then(() => {
            const newProducts = this.state.products.filter((product)  => product._id  !== productId)
            this.setState({
                products:newProducts
            })
        })
         .catch((error) => console.log(error))
    }


    render(){
        // console.log(this.props.user)
        return(
            <div>
            {this.state.products.map((product,index) => (
            <div key={index}>

            <div className="Product-Image-Wrapper">
                <img src={product.imageURL} alt={product.name} className="Product-Image" />
            </div>

            <div className="Product-Title">
                <p className="Product-Name">{product.name}</p>
            </div>        
            <div className="Product-Data">
                <small className="Product-Price">${product.price}</small>
                <button onClick={ product.addToCart } className="product-button Product-Add">Add to Cart</button>
                <button onClick={() => this.destroy(product._id)}>Remove</button>

           </div>
                </div>
            ))}
        </div>       
         )    
    }
}


export default IndexProduct
