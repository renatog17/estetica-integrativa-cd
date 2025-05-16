import './Sobre.css'

export default function Sobre(props){
    return (
        <div>
            <div className='sobre'>
                <img src={props.srcImg}></img>
                <div className='aboutme-content'>
                    <p className='about-me'>{props.sobre}</p>
                    <h1>{props.tituloSobre}</h1>
                    <p className='description' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    </p>
                    <p className='button' ><a href="">Descubra nossas especialidades</a></p>

                </div>
            </div>
            <div className="linha-do-tempo">
                <div className="eventos">

                    {props.eventos.map((evento, index) => (
                    <div key={index} className="evento">
                    <div className="circulo">{evento.ano}</div>
                        <p>{evento.descricao}</p>
                    </div>
                    ))}

                </div>
            </div>
        </div>
    )
}