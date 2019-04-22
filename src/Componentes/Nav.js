import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Nav extends Component {

  render() {
    return (
      <div class="col-sm-12">
        <nav class="navbar navbar-expand-sm navbar-light fixed-top py-3" id="mainNav">
          <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">LIBRERIA REACT</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto my-2 my-lg-0">
                <li class="nav-item">
                  <Link class="nav-link js-scroll-trigger" to='/'> Home </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link js-scroll-trigger" to='/Generos'> Generos </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link js-scroll-trigger" to='/Libros'> Libros </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}