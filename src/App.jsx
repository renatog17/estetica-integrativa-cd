import './App.css'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import Localizacao from './Localizacao/Localizacao'
import SobreNos from './SobreNos/SobreNos'
import TratamentosEspecialidades from './TratamentosEspecialidades/TratamentosEspecialidades'

function App() {

  return (
    <div>   
      <Hero></Hero>
      <SobreNos></SobreNos>
      <TratamentosEspecialidades></TratamentosEspecialidades>
      <Localizacao></Localizacao>
      <Footer></Footer>
    </div>
  )
}

export default App
