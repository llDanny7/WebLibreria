import React, { Component } from 'react'
import Select from 'react-select';

const options = [];
  // { value: 'chocolate', label: 'Chocolate' },
  // { value: 'strawberry', label: 'Strawberry' },
  // { value: 'vanilla', label: 'Vanilla' }
class FormularioLibros extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      precio: 0,
      selectedOption:null    
    }
    this.guardar = this.guardar.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    options = this.obtenerGeneros();
  }

  S4()
  {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
  }

  obtenerGUID()
  {
    const guid = (this.S4() + this.S4() + "-" + this.S4() + "-4" + this.S4().substr(0,3) + "-" + this.S4() + "-" + this.S4() + this.S4() + this.S4()).toLowerCase();
    return guid;
  }

  obtenerGeneros()
  {
    const listaGeneros = JSON.parse(localStorage.getItem("Generos"));
    debugger
    if (listaGeneros == null)
      listaGeneros = [];
    const listaGenerosSelect = listaGeneros.map(genero => {return {value:genero.id, label: genero.name};});
    return listaGenerosSelect;
  }

  existeLibro(listaLibros, titulo)
  {
    return listaLibros.some(x => x.titulo === titulo);
  }

  guardar()
  {
    // console.log(selectedOption)
    let listaLibros = JSON.parse(localStorage.getItem("LIBROS"));
    if (listaLibros == null) listaLibros = [];

    if (this.existeLibro(listaLibros, this.state.titulo))
    {
      alert("Ya existe el libroa");
      return false;
    }
    listaLibros.push({id:this.obtenerGUID(), titulo: this.state.titulo, precio: this.state.precio})
    localStorage.setItem("LIBROS", JSON.stringify(listaLibros));
    alert("Se ha añadido el libro correctamente")
    this.props.history.push('/Libros');

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
      <form class="col-sm-12">
        <div class="form-group">
          <label for="titulo">Libro</label>
          <input name="titulo" value={this.state.titulo} type="text" class="form-control" aria-describedby="emailHelp" onChange={this.changeHandler} />
        </div>
        <div class="form-group">
          <label for="precio">Precio</label>
          <input name="precio" value={this.state.precio} type="numeric" class="form-control" onChange={this.changeHandler} />
        </div>

        <div class="form-group">
          <label for="precio">Genero</label>
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

         
        <button type="button" class="btn btn-primary" onClick={this.guardar}>Guardar</button>
      </form>
    );
  }
}

export default FormularioLibros