import { useState } from "react";
//import '../App.css';
//import "bootstrap/dist/css/bootstrap.min.css";

//import '/ProductsEstilos'



function Products() {

    const [selected, setSelected] = useState(null)

    const toogle = (i) =>{
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (

        <div className="wrapper">
            <div className="accordion">
                {data.map((item,i )=> (
                    <div className="item">
                        <div className="title" onClick={() => toogle(i)}>
                            <h2>{item.question}</h2>
                            <span>{
                            selected === i ? '-' : '+'}</span>
                        </div>

                        <div className={
                            selected === i ? 'content show' : 'content'}>{item.answer}
                        </div>
                    </div>
                    


                ))}

</div>
        </div>



    /*<div id="carouselExampleDark" class="carousel carousel-dark slide">
            <h1>Estoy en carrusel</h1>
           <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10">
                   <img src="monitor.jpg" class="d-block w-25" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Tarjeta Grafica Radeon.</p>
                        </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                     <img src="tarjeta.png" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>asdasdasd.</p>
                        </div>
                </div>
                <div class="carousel-item">
                     <img src="cpu.jpg" class="d-block w-100" alt="..."/> 
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true">asdasdasdasda</span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>*/
    )
};


const data = [
    {
        question:'Question 1',
        answer:'Lorem impsun',
    },
    {
        question:'Question 2',
        answer:'Lorem IMPSUN',
    },
    {
        question:'Question 3',
        answer:'LOREM IMPSUN',
    }
]



export default Products