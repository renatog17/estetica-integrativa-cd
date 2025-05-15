import './HeroMain.css'
import { ImArrowDown2 } from "react-icons/im";


export default function HeroMain(){
    return (
        <div className="hero-main" >
            <div className='content'>
                <div className="hero-text">
                    <h1>Saúde e beleza podem caminhar de mãos juntas</h1>
                </div>
                <div className="hero-secondary-text">
                    Embarque conosco nessa jornada de autoconhecimento e autocuidado
                </div>
                <div className="hero-button">
                    Descubra nossas especialidades
                    <ImArrowDown2 />
                </div>
            </div>
            <div className='image'>
                <img src='/cris-e-dani.jpeg'></img>
            </div>
        </div>
    )
}