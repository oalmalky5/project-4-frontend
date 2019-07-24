import React, {Component}  from 'react'
import {show,update} from './api'
import {withRouter} from 'react-router-dom';

class EditProduct extends Component{
    state={
        dataForm: {
            name: '',
            description:'',
            imageURL:'',
            price:''
        }
    }
    componentDidMount(){
        const user =this.props.user;
        const  productId = this.props.match.params.id
        show(user, productId)
        .then((response) => {
            const product = response.data.product
            this.setState({
                dataForm:product
            })
        })
        .catch(error => console.log(error))
    }

    handleChange = (event) => {
        //get input name
        const name =  event.target.name;
        //get value of input
        const value =   event.target.value;
        const newForm  =  Object.assign(this.state.dataFrom)
        newForm[name] = value;
        this.setState({
            dataForm:newForm
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        const  user = this.props.user;
        const  productId = this.props.match.params.id;
        const  updateProduct = this.state.dataFrom
        update(user,  updateProduct, productId)
        .then(() => this.props.history.push(`/products/${productId}`))
        .catch((error) => console.log(error))
    }
    

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <label>Name Of Product</label>
            <input onChange={this.handleChange} type="text" name="name" value={this.state.dataForm.name}></input>
            <label>Description</label>
            <input onChange={this.handleChange} type="text" name="description" value={this.state.dataForm.description}/>
            <label>Image</label>
            <input onChange={this.handleChange} type="text" name="imageURL" value={this.state.dataForm.imageURL}/>
            <label>Price</label>
            <input onChange={this.handleChange} type="text" name="price" value={this.state.dataForm.price}/>
            <button type="Submit">Update</button>
        </form>
        )
    }
}

export default withRouter(EditProduct)