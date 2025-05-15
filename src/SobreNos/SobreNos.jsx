import Sobre from "./Sobre/Sobre"
import './SobreNos.css'

export default function SobreNos(){

    return(
        <div className="sobre-nos">
            <img src="/right_half.jpeg"></img>
            <div className="about-us">
                <Sobre></Sobre>
                <Sobre></Sobre>
            </div>
            <img src="/left_half.jpeg"></img>
        </div>
    )
}