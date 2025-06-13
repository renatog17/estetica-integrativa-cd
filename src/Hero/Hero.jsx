import './Hero.css'
import '../variables.css'

import TopBar from './TopBar/TopBar';
import SecondaryTopBar from './SecondaryTopBar/SecondaryTopBar';
import HeroMain from './HeroMain/HeroMain';



export default function Hero(){
    return (
        <div>
            <div className="topbar">
            <TopBar/>
            </div>
            <SecondaryTopBar></SecondaryTopBar>
            <HeroMain></HeroMain>
        </div>
    )
}