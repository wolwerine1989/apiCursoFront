import "./Footer.module.css";
import { Element } from "react-scroll";

function Footer() {
    return(
        <Element name="test4" className="element">

        <div>
            <i class="fas fa-copyright fa-xs fa-fw "></i>
                <div className="contactor">
                    <div class="container">
                        <div class="mb-12">
                        <h2 class="nombre">Contacto </h2>
                        <p class="correo">Mail: david95@gmail.com</p>    
                        <p class="numero">05684546546</p>
                    </div>
                </div>
            </div>
        </div>
        </Element>
    )
};

export default Footer