import React, { Component } from 'react'
import './SearchCss.css'

class Search extends Component {
    
    constructor(props)
    {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event)
    {
        const {find} = this.props;
        find(event.target.value);
    }
    render() {
        
        return (
            <div id="custom-search-input" className="row">
                <div className="input-group col-md-12">
                    <input type="text" className="  search-query form-control" placeholder="Search" onChange={this.onChangeHandler} />
                    <span className="input-group-btn">
                        <button className="btn btn-danger" type="button">
                        <i className="fas fa-search"></i>
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}

export default Search