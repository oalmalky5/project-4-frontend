import React,{Component} from 'react'
import {allproducts} from './products/api'
import {Link, withRouter} from 'react-router-dom'

class Home extends Component{
    state = {
        products:[]
    }
    componentDidMount(){
        allproducts()
        .then(res => {
            this.setState({
                products:res.data.products
            })
        })
        
    }
    render(){
        return(
            <div >
            {this.state.products.map((product,index) => (
            <div key={index}>

            <div className="Product-Image-Wrapper ">
                <img src={product.imageURL} alt={product.name} className="Product-Image" />
            </div>

            <div className="Product-Title text-danger "  >
                <p className="Product-Name">{product.name}</p>
            </div>        
            <div className="Product-Data">
                <small className="Product-Price">${product.price}</small>
                <button onClick={ product.addToCart } className="product-button Product-Add">Add to Cart</button>

           </div>
            </div>
            ))}
        </div>       
         )
    }
}

export default withRouter(Home);