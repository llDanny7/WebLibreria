import React, {Component} from 'react'
import Book from './Book'
import {BookService} from '../Servicio/BookService'
import Search from '../Common/Search'

class ListBook extends Component
{
    constructor(props)
    {
        super(props);
        const allBook = BookService.getAll()
        this.state = 
        {
            books: allBook,
            booksSearch: allBook 
        }
        this.findBook = this.findBook.bind(this);
    }

    findBook(algo)
    {
        const {books} = this.state;
        const booksSearch = books.filter(book => book.title.toLowerCase().indexOf(algo.toLowerCase()) >= 0)
        this.setState({
            booksSearch: booksSearch
        })
    }
    render()
    {
        const {booksSearch} = this.state;
        return (
            <div className="row">
                <div className="col-sm-12">                                        
                    <Search find = {this.findBook}></Search>
                </div>
                <div className="col-sm-12">
                    <div className="row">
                {
                    booksSearch.map( (book, key) =>
                        <div key={key} className="col-sm-4">
                            <Book  book={book} ></Book>
                        </div>
                    )
                }
                </div>
                </div>
            </div>
        );
    }
}

export default ListBook