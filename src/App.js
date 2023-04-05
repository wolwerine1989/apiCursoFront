import Employee from "./components/Employee";
//import 'bootstrap/dist/css/bootstrap.min.css';

//import { EmployeeDiseno } from "./components/EmployeeDiseno"


//Secciones de los archivo html
import Contact from './components/Contact/contact';
import Navbar from "./components/Navbar/navbar";
import Servicio from "./components/Services/services";
import Products from "./components/Products/products";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";
import EnviarEmail from "./mail/EnviarEmail";

// -----------------------------------bootstrap--------------------------
import "bootstrap/dist/css/bootstrap.min.css";


//-----------------------------------GetBootstrap------------------


//-----------------------------------Libreria react-toastify--------------
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const notify = () => toast('Hola!');
  return (
    <div className="App">

                <Navbar/>
                
                <Products/>

                <Contact/>

                <Servicio/>

                <Employee/>

                <About/>

                <Footer/>

                <EnviarEmail/>

    </div>
  );
}



export default App;
