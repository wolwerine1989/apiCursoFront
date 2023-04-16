
import React from 'react';
import "./EstiloNav.css";

//import './components/Navbar/EstiloNav.css';

//Routing link


import { Link } from 'react-scroll';

function Navbar() {
    return (
        <div className="navbarMain">

            <nav class="navbar-expand-lg">
                <div class="container-fluid">
                   
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" 
                    aria-label="Toggle navigation">

                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <center><h1 style={{color:'#fff9c4'}}>CompuCenter</h1></center>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-6 mb-lg-6">

                            <li class="nav-item">
                                <Link
                                    activeClass="active"
                                    className="test1"
                                    to="test1"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    style={{ color: '#f5f2d4' }}
                                >
                                    Servicio
                                </Link>
                            </li>

                            <li class="nav-item">
                                <Link
                                    activeClass="active"
                                    className="test3"
                                    to="test3"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    style={{ color: '#f5f2d4' }}
                                >
                                    About
                                </Link>
                            </li>

                            <li class="nav-item">
                                <Link
                                    activeClass="active"
                                    className="test2"
                                    to="test2"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    style={{ color: '#f5f2d4' }}

                                >
                                   Productos
                                </Link>
                            </li>

                            <li class="nav-item">
                                <Link
                                    activeClass="active"
                                    className="test4"
                                    to="test4"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    style={{ color:'#f5f2d4' }}
                                >
                                    Contactanos
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                            </li>

                        </ul>
                        <form class="d-flex">
                        </form>
                    </div>
                    
                </div>

            </nav>

            <h2 style={{ padding: 10 , color:'blue' }} class="subtitulo">Te Ayudamos a crear conseguir la laptop de tus sueños</h2>
            <p style={{ padding: 25, color:'#000000' }}>Somos una empresa dedicada a exportar computadoras y sus componentes a traves de la aplicacion de facebook
                y muy pronto estaremos en mercado libre
            </p>

        </div>


    )
};


export default Navbar