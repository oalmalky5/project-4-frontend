import React, {Component} from 'react';
import {index,destroy} from './api'
import {Link} from 'react-router-dom';

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
            const newProducts = this.state.products.filter((product)  => product._id  != productId)
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
                    <Link to={`/products/${product._id}`}><h1>{product.name}</h1></Link>
                    <h1>{product.description}</h1>
                    <h1>{product.price}</h1>
                    <img src={product.imageURL} alt=""/>
                    <button onClick={() => this.destroy(product._id)}>Delete</button>
                    <Link to={`/products/${product._id}/edit`}><button>Edit</button></Link>
                </div>
            ))}
        </div>       
         )    
    }
}


export default IndexProduct
