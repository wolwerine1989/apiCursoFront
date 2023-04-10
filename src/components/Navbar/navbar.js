
import React from 'react';
import "./EstiloNav.css";

//import './components/Navbar/EstiloNav.css';

//Routing link


import { Link } from 'react-scroll';

function Navbar() {
    return (

        <div className="navbar">
            <div className="container">
                <div className="md-12">
                    <h1>Proyecto Desarrollo Web!! =P </h1>
                    <div style={{ position: 'relative', width: '100%', height: 'auto', padding: '25px', left: '60%' }}>
                        <img src="primerImagen.jpg" class='computadora' alt="Imagen" />
                    </div>
                    {/* Estilo Letras del navbar */}
                    <div className="" style={{
                        //position: 'absolute',
                        top: '30%',
                        left: '50%',
                        transform: 'translate(-5%, -150%)',
                        color: '#e65100',
                        fontSize: '24px'
                    }}>
                        <nav className='alinear'>
                            <ul class="">

                                <li class="nav-item">
                                <Link
                                        activeClass="active"
                                        className="test1"
                                        to="test1"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                            Servicio
                                    </Link>                                </li>
                                <li class="nav-item">
                                    <Link
                                        activeClass="active"
                                        className="test2"
                                        to="test2"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Producto
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
                                    >
                                        Sobre Nosotros
                                    </Link>                                </li>

                                <li class="nav-item">
                                <Link
                                        activeClass="active"
                                        className="test4"
                                        to="test4"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                >
                                       Contacto
                                    </Link>                             
                                   </li>

                                   <li class="nav-item">
                                <Link
                                        activeClass="active"
                                        className="test5"
                                        to="test5"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Registrar Usuario
                                    </Link>                                </li>

                                    <li class="nav-item">
                                <Link
                                        activeClass="active"
                                        className="test6"
                                        to="test6"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Email
                                    </Link>                                </li>

                                <button type="button" class="btn btn-secondary">Leer Mas</button>

                            </ul>
                        </nav>
                    </div>

                </div>
            </div>

            <center><h2 style={{ padding: 10 }} class="subtitulo">Te Ayudamos a crear conseguir la laptop de tus sueños</h2></center>
            <p style={{ padding: 25 }}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum</p>

        </div>


    )
};


export default Navbar