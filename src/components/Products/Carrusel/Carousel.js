
import Slider from 'react-slick';
import { Element } from "react-scroll";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export const SimpleSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    };



    return (
        <Element name="test2" className="element">



        <div className='contenedor' style={{ padding: 50 }}>
           <center><strong><h2>Accesorios de Computadora</h2></strong></center>
            <Slider {...settings}>
                {items.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <h4>{item.contenido}</h4>

                        <div className='title'>
                            <h2>{item.question}</h2>

                        </div>
                        <center><img src={item.image} alt={item.title} style={{height:'75vh'}} /></center>
                    </div>
                ))}
            </Slider>
        </div>
        </Element>
    );



};






















const items = [

    {
        id: 1, title: 'Accesorios para un estudio gamer',contenido: 'Conoce los gadgets accesorios más increíbles y asequibles para tu set up Gamer',
        image: 'https://i.pinimg.com/originals/82/ce/ed/82ceede6cd7f360ab893e0beed78cab4.png'
    },

    {
        id: 2, title: 'Silla Gamer',contenido: ' Silla gamer con Luces LED y masajeador lumbar.',
        image: 'https://gamersecuador.store/wp-content/uploads/2021/11/SILLA_AZUL_WEB.jpg'
    },

    { id: 3, title: 'Tarjeta Grafica', contenido: 'Tarejeta Garfica msi', 
    image: 'https://hiraoka.com.pe/media/mageplaza/blog/post/q/u/qu_es_una_tarjeta_gr_fica_y_como_funciona.jpg' },

    { id: 4, title: 'Parlantes',contenido: 'Tarejeta Garfica msi', 
    image: 'https://i0.wp.com/www.blodfix.com.ec/wp-content/uploads/2021/12/parlantes-havit-HV-SK563.png?fit=1000%2C1000&ssl=1' },

    { id: 5, title: 'tarjeta grafica',contenido: 'Tarejeta Garfica msi',
    image: 'https://i0.wp.com/nomadaware.com.ec/wp-content/uploads/2023/01/NomadaWare_laptop_gamer_msi_katana_gf66_i9_12900h_16gb_1tb_3070ti_8gb3.png?fit=1024%2C819&ssl=1' },
]