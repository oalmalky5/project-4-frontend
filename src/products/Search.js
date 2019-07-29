import React, {Component} from 'react';

const Search = () => {

const [data, setData] = useState({
    search: '',
    results: [],
    searched: false

})

const searchSubmit = () => {
   // 
}

const handleChange = () => {
    //
}

const searchForm = () => {
   <from onSubmit={searchSubmit}>
        <span className="input-group-text">
            <div className="input-group input-group-lg">
            <input
                type="search" 
                className="form-control" 
                onCHange={handleChange('search')} 
                placeholder="Search By name"
            />
            </div>
        </span>
   </from> 
}

// const = {search, result, searched} = data
    return (
        <div>
            <div className="conatainer">{searchFrom()}</div>
        </div>
    )
}



export default Search
