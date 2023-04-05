
import React from 'react';

//import './components/Navbar/EstiloNav.css';

function Navbar() {
    return (

       <div className="navbar">
        <div style={{ position: 'relative', width: '60%', height: 'auto' }}>
            <img src="primerImagen.jpg" alt="Imagen" style={{ padding:'30px', width: '100%', height: 'auto' }} />
            <div style={{
                position: 'absolute',
                top: '30%',
                left: '150%',
                transform: 'translate(-50%, -50%)',
                color: '#0000ff',
                fontSize: '24px'
            }}>
                <ul class="">

                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">sobre nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./components/Products/products">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" >Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" >Contactos</a>
                    </li>

                    <button type="button" class="btn btn-secondary">Leer Mas</button>

                    

                </ul>
            </div>

            <center><h2 class="subtitulo">Te Ayudamos a crear conseguir la laptop de tus sueños</h2></center>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                 but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
                  versions of Lorem Ipsum</p>


        </div>
        </div>
    )
};


export default Navbar