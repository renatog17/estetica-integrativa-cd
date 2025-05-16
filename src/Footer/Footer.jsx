import './Footer.css'

export default function Footer(){
    return(
        <>
            <div className='footer'>
                <div className='logo' >
                    <img src='dc-logo.png'></img>
                </div>
                <div className='contato'>
                    Contato<br/>
                    Telefone: 71999999999<br/>
                    Whatsapp: 71999999999<br/>
                    Email: dccontato@gmail.com<br/>
                </div>
                <div className='navegue' >
                    Navegue<br/>
                    Sobre mim<br/>
                    Localização<br/>
                    Contatos<br/>
                    Tratamentos<br/>
                </div>
                <div className='links'>
                    Links rápidos<br/>
                    Política de privacidade<br/>
                    Termos de Uso
                </div>
            </div>
            <p className='feitopor'>Feito por Renato Oliveira</p>
        </>
    )
}