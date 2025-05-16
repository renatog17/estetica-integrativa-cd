import Sobre from "./Sobre/Sobre"
import { useState, useEffect } from 'react';
import './SobreNos.css'

export default function SobreNos(){

    const eventosCris = [
  { ano: 2009, descricao: 'Início da trajetória profissional.' },
  { ano: 2011, descricao: 'Primeiro grande projeto.' },
  { ano: 2018, descricao: 'Expansão internacional.' },
];

const [mostrarPrimeiro, setMostrarPrimeiro] = useState(true);
const [fade, setFade] = useState(true);

  useEffect(() => {
  const intervalo = setInterval(() => {
    setFade(false); // inicia fade out
    setTimeout(() => {
      setMostrarPrimeiro(prev => !prev); // troca conteúdo
      setFade(true); // inicia fade in
    }, 500); // duração do fade out, deve bater com o CSS
  }, 10000); // 10 segundos

  return () => clearInterval(intervalo);
}, []);
    return(
        <div className="sobre-nos">
            <div className={`about-us ${fade ? 'fade-in' : 'fade-out'}`}>
                {mostrarPrimeiro ? (
                <Sobre
                    srcImg="./left_half.jpeg"
                    sobre="Sobre Cris Santos"
                    tituloSobre="Prazer, me chamo Cris Santos"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    eventos={eventosCris}
                />
                ) : (
                <Sobre
                    srcImg="./right_half.jpeg"
                    sobre="Sobre Dani Sá"
                    tituloSobre="Prazer, me chamo Dani Sá"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                    eventos={eventosCris}
                />
                )}
            </div>
        </div>
    )
}