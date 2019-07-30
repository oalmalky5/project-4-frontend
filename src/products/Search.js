import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom'
import {search} from './api'
class Search extends React.Component{

    state = {
        search: '',
        results: [],
        searched: false
    }

// prevent defualt behavior
// request to backend to fetch product based on
// ....whatever used typed in the search bar

searchSubmit = (e) => {
   e.preventDefault()
    search(this.state.search)
    .then((response)=> {
        // console.log(this.props.history)
        const id = response.data.products[0]._id
        this.props.history.push(`/products/${id}`)
        
    })
    .catch((error)=>{
        console.log(error)
    })

}

// set data to set state
// take the rest of data then name
// we grap that name and we set to event target vlaue
// use searched to determine if user already searched 

handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

// const searchForm = () => {}
render() {
    return (
        <div>
            <form onSubmit={this.searchSubmit}>
    <span className="input-group-text">
        <div className="input-group input-group-lg">
        <input
            type="search" 
            name="search"
            className="form-control" 
            onChange={this.handleChange} 
            placeholder="Search By name"
        />
        </div>
        <div className="btn input-group-append" style= {{border: 'none'}}>
            <button className="input-group-text">Search</button>
        </div>
    </span>
</form> 
            <div className="conatainer">{}</div>
        </div>
    )

 }
}




export default withRouter(Search)
