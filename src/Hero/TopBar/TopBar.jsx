import './TopBar.css'
import { FaWhatsapp, FaInstagram} from 'react-icons/fa';
import { FaLocationArrow } from "react-icons/fa6";
import '../../variables.css'

export default function TopBar(){
    return (
        <div className="hero-top-bar">
            <div className='hero-icons'>
                <FaLocationArrow/>
                <p>Salvador</p>
            </div>
            <div className='hero-icons'>
                <a href="https://wa.me/yourNumber" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />                    </a>
                <a href="https://www.instagram.com/yourUsername" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </div>
    )
}