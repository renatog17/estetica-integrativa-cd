import './Localizacao.css'

export default function Localizacao(){
    return(
        <div className='localizacao'>
            <p>Localização</p>
            <div className='apresentacao'>Esperamos ansiosas para te ver por aqui: </div>
            <div className='apresentacao'>esta é a nossa localização: </div>
            <div>
                <iframe
                    title="Mapa da localização"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2699.241999320646!2d-38.4074709097837!3d-12.929985825834128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71610b12942696d%3A0xf3c47e980e748536!2sResidencial%20Mirante%20do%20Trobogy!5e0!3m2!1spt-BR!2sbr!4v1747349786308!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="300"
                    style={{ border: 0, margin: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}