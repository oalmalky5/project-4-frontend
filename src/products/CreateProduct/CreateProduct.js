import React, {Component} from 'react'
import {create} from '../api'
import {withRouter} from 'react-router-dom'

class CreateProduct extends Component{
    state = {
        dataForm: {
            name:"",
            description: "",
            imageURL: "",
            price: ""
        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const newForm = Object.assign(this.state.dataForm)
        newForm[name] = value;
        this.setState({
            dataFrom: newForm
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newProduct = this.state.dataForm
        const user = this.props.user 
        console.log(user)
        create(user, newProduct)
        .then(() => this.props.alert('Created', 'success'))
        .then(() => this.props.history.push('/products'))
        .catch((error) => console.log(error))
    }

    render(){
       
        return(

            <form onSubmit={this.handleSubmit}>
                <label>Name Of Product</label>
                <input onChange={this.handleChange} type="text" name="name" value={this.state.dataForm.name} class="input1"></input>
                <label>Description</label>
                <input onChange={this.handleChange} type="text" name="description" value={this.state.dataForm.description} class="input"/>
                <label>Image</label>
                <input onChange={this.handleChange} type="text" name="imageURL" value={this.state.dataForm.imageURL} class="input3"/>
                <label>Price</label>
                <input onChange={this.handleChange} type="integer" name="price" value={this.state.dataForm.price} class="input4"/>
                <button type="Submit" class="btn btn-info btn-lg">Add</button>
            </form>
           
        )
    }
}


export default withRouter(CreateProduct)