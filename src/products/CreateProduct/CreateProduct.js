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
            dataForm: newForm
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newProduct = this.state.dataForm
        console.log(newProduct)
        const user = this.props.user 
        // console.log(user.token)
        create(user, newProduct)
        .then(() => this.props.alert('Created', 'success'))
        .then(() => this.props.history.push('/'))
        .catch((error) => console.log(error))
    }

    render(){
       
        return(

            <form onSubmit={this.handleSubmit} className="auth-form">
                <label></label>
                <input onChange={this.handleChange} placeholder="Name Of Product" id ="inputIconEx2" class="form-control" type="text" name="name" value={this.state.dataForm.name} className="input1"></input>
                <label></label>
                <input onChange={this.handleChange} placeholder="Description" id ="inputIconEx2" class="form-control" type="text" name="description" value={this.state.dataForm.description} className="input"/>
                <label></label>
                <input onChange={this.handleChange} placeholder="Image URL"id ="inputIconEx2" class="form-control" type="text" name="imageURL" value={this.state.dataForm.imageURL} className="input3"/>
                <label></label>
                <input onChange={this.handleChange} placeholder="Price" id ="inputIconEx2" class="form-control" type="number" name="price" value={this.state.dataForm.price} className="input4"/>
                <button type="Submit" class="btn btn-info btn-lg">Add Product</button>
            </form>
           
        )
    }
}


export default withRouter(CreateProduct)