import React, { Component } from 'react'

class Book extends Component {
    render() {
        const { book } = this.props;
        return (
            <div className="card" >
                <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Book_icoline.svg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title"> {book.title}</h5>
                    <p className="card-text"> {book.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default Book