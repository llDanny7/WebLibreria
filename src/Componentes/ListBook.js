import React, {Component} from 'react'
import Book from './Book'
import {BookService} from '../Servicio/BookService'

class ListBook extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            books: BookService.getAll()
        }
    }

    render()
    {
        const {books} = this.state;
        return (
            <div className="row">
                {
                    books.map( (book, key) =>
                        <div key={key} className="col-sm-4">
                            <Book  book={book}></Book>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default ListBook