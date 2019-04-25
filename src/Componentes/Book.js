import React, { Component } from 'react'
import '../Css/Card.css'

class Book extends Component {
    render() {
        const { book } = this.props;
        return (
            <div className="card-content">
                <div className="card-img">
                    <img src="https://placeimg.com/380/230/nature" alt="" />
                    <span><h4>{book.title}</h4></span>
                </div>
                <div className="card-desc">
                    <h3>{book.title}</h3>
                    <p>{book.description}</p>
                    <a href="#" className="btn-card">Read</a>
                </div>
            </div>
        );
    }
}

export default Book