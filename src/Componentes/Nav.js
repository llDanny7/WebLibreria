import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Nav extends Component {

  render() {
    return (
      <div className="col-sm-12">
        <nav className="navbar navbar-expand-sm navbar-light fixed-top py-3" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">LIBRERIA REACT</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto my-2 my-lg-0">
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to='/'> Home </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to='/Generos'> Generos </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to='/Libros'> Libros </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}