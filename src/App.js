import Employee from "./components/Employee";
//import 'bootstrap/dist/css/bootstrap.min.css';




//Secciones de los archivo html
import Navbar from "./components/Navbar/navbar";
import Servicio from "./components/Services/services";
import Products from "./components/Products/products";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";
import EnviarEmail from "./mail/EnviarEmail";

// -----------------------------------bootstrap--------------------------
import "bootstrap/dist/css/bootstrap.min.css";


import "./App.css";
//-----------------------------------Libreria react-toastify--------------
import 'react-toastify/dist/ReactToastify.css';


//---------------------------------Routing------------------


//----------------------------Carrusel-----------------------------
import { SimpleSlider } from "./components/Products/Carrusel/Carousel";


function App() {


  return (
    <div className="containerPrincipal">

                <Navbar/>
                
                <Products/>

                <Servicio/>

                <Employee/>

                <SimpleSlider/>

                <About/>

                <Footer/>

                <EnviarEmail/>
        
    </div>
    
  );
}



export default App;
