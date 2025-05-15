import './SecondaryTopBar.css'

export default function SecondaryTopBar(){
    return(
        <div className='secondary-top-bar'>
            <div className='logo'>
                <img src="./dc-logo.png" alt="D e C logo" />
                <p>Dra. Danielle Sá | Dra. Cris Santos</p>
            </div>
            <div className='navbar'>
                <span>Sobre Nós</span>
                <span>Localização</span>
                <span>Tratamentos</span>
            </div>

            <div className='link'>
                Agende seu horário
            </div>
        </div>
    )
}