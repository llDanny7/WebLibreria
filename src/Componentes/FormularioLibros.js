import React, { Component } from 'react'
import Select from 'react-select';
import {BookService} from '../Servicio/BookService'
import {GenresService} from '../Servicio/GenresService'

let options = [];

class FormularioLibros extends Component {
  constructor(props) {
    super(props);

    const listGenres = GenresService.getAll();
    options = listGenres.map(genre => {return {value:genre.id, label: genre.name};});

    const book = this.getBookById(props.match.params.id, options);
    this.state = {
      title: book.title,
      price: book.price,
      description: book.description,
      selectedOption: book.selectedOption,
      id: book.id
    }
    this.save = this.save.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.getBookById = this.getBookById.bind(this);
  
  }

  getBookById(id, options)
  {
    const book = BookService.getById(id);
    if (book === undefined || book === null)
      return {title: "", price: 0, description: "",selectedOption: null, id: null}
    
    book.selectedOption = book.idGenres.map(idGenre => options.find(x => x.value === idGenre));  
    return book;
  }

  isValidBook(title, selectedOption)
  {
    debugger
    return title !== "" && (selectedOption !== undefined && selectedOption !== null )&& selectedOption.length > 0;
  }
  save()
  {
    const {title, price, description, selectedOption, id} = this.state;
    if (!this.isValidBook(title, selectedOption))
    {
      alert("Los datos son invalidos");
      return;
    }

    const idGenres = selectedOption.map( genre => genre.value);
    const book = {title: title, price: price, description: description, idGenres: idGenres, id: id};
    const result = (id === null)? BookService.add(book) : BookService.edit(book);
    
    alert(result.message);
    if (!result.isOk)         
      return;
    
    this.props.history.push("/Libros");
  }

  changeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }  
  render() {
    const { selectedOption } = this.state;
    return (
      <form className="col-sm-12">
        <div className="form-group">
          <label htmlFor="title">Libro</label>
          <input name="title" value={this.state.title} type="text" className="form-control" aria-describedby="emailHelp" onChange={this.changeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <input name="description" value={this.state.description} type="text" className="form-control" aria-describedby="emailHelp" onChange={this.changeHandler} />
        </div>        
        <div className="form-group">
          <label htmlFor="price">Precio</label>
          <input name="price" value={this.state.price} type="numeric" className="form-control" onChange={this.changeHandler} />
        </div>

        <div className="form-group">
          <label htmlFor="precio">Genero</label>
          <Select            
            isMulti
            name="colors"
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
          /> 
        </div>

         
        <button type="button" className="btn btn-primary" onClick={this.save}>Guardar</button>
      </form>
    );
  }
}

export default FormularioLibros