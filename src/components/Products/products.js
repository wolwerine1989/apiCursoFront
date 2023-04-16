import { useState } from "react";
import { Element } from "react-scroll";
import Slider from 'react-slick';





//import '../App.css';
//import "bootstrap/dist/css/bootstrap.min.css";

//import '/ProductsEstilos'
import  "./ProductsEstilos.css";

function Products() {

    //------------- Inicio del Acordeon------------------
    const [selected, setSelected] = useState(null)

    const toogle = (i) => {
        if (selected === i) {
          return setSelected(null)
        }
        setSelected(i)
    }


//--------------------Fin del Acordeon--------------



//-------------------Inicio Carrusel--------------

   

      
        
    






//----------------Fin Carrusel---------------------

    return (
        <div>
        <div className="total">
        <div className="wrapper">
            <div className="accordion">
                {data.map((item, i)=> (
                    <div className='item'>

                        <div className='title' onClick={() => toogle(i)}>
                            <h2>{item.question}</h2>
                            <span>
                                  {
                                    selected === i ? '-' : '+'
                                  }
                            </span>
                        </div>

                        <div className={
                            selected === i ? 'content show' : 'content'}>{item.answer}
                        </div>

                    </div>
                ))}
            </div>
        </div>


   </div>

    </div>
)
    
                        
};

//-----------------------Array para el Acordeon-------------
const data = [
    {
        question:'Cpu',
        answer: "Computadora de escritorio empresarial DELL Optiplex 7010 (Intel Quad Core i5-3470 a 3,2 GHz, 16 GB de RAM, 2 TB de disco duro, USB 3.0, DVDRW, Windows 10 Professional (renovado",
    },
    {
        question:'Mouse',
        answer: "Logitech B100 Corded Mouse — Ratón USB con cable para ordenadores y portátiles, para uso con la mano derecha o izquierda, negro",
    },
    {
        question:'Monitor',
        answer: "Monitor Gamer Asus Tuf Gaming Vg27wq Curvo 27 Wqhd 165hz 1ms",
    }
]


export default Products