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
                        <Book key={key} book={book}></Book>
                    )
                }
            </div>
        );
    }
}

export default ListBook