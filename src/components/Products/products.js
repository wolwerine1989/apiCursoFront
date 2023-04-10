import { useState } from "react";
import { Element } from "react-scroll";

//import '../App.css';
//import "bootstrap/dist/css/bootstrap.min.css";

//import '/ProductsEstilos'
import  "./ProductsEstilos.css";
import "./Mycard.css";
import Mycard from "./Mycard.js";

function Products() {

    //------------- Inicio del Acordeon------------------
    const [selected, setSelected] = useState(null)

    const toogle = (i) => {
        if (selected === i) {
          return setSelected(null)
        }
        setSelected(i)
    }

    let box = document.querySelector('.product-container');

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }
//--------------------Fin del Acordeon--------------

    return (
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

        <Element name="test2" className="element">

        <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


            <div className="product-container">
                <Mycard cardno='1' src='https://www.google.com/url?sa=i&url=https%3A%2F%2F442.perfil.com%2Fnoticias%2Fesports%2Fque-es-dota-2-el-deporte-electronico-que-reparte-millones-de-dolares-en-sus-torneos-peek.phtml&psig=AOvVaw15K71Q7asBzjJ61CQ_WPxA&ust=1681172165287000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIir6b-Env4CFQAAAAAdAAAAABAE' />
                <Mycard cardno='2' />
                <Mycard cardno='3' />
                <Mycard cardno='4' />
                <Mycard cardno='5' />
                <Mycard cardno='6' />
                <Mycard cardno='7' />
                <Mycard cardno='8' />
                <Mycard cardno='9' />
                <Mycard cardno='10' />
                <Mycard cardno='11' />
                <Mycard cardno='12' />
                <Mycard cardno='13' />
            </div>
            
        </div>
        </Element>

        </div>
    )
    

};

//-----------------------Array para el Acordeon-------------
const data = [
    {
        question:'Question 1',
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industr Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,             when an unknown printer took a galley of type and scrambled it to make a type specimen typesetting, remaining essentially unchanged. It was popularised in the 1960s with",
    },
    {
        question:'Question 2',
        answer: "Lorem Ipsum 2 is simply dummy text of the printing and typesetting industr Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,             when an unknown printer took a galley of type and scrambled it to make a type specimen typesetting, remaining essentially unchanged. It was popularised in the 1960s with",
    },
    {
        question:'Question 3',
        answer: "Lorem Ipsum 3 is simply dummy text of the printing and typesetting industr Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,             when an unknown printer took a galley of type and scrambled it to make a type specimen typesetting, remaining essentially unchanged. It was popularised in the 1960s with",
    }
]



export default Products