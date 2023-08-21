



import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulário';




function App() {

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradoAdicionado = (colaborador)=>{

    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
        < Banner /> 
        <Formulario aoColaboradorCadastrado = {colaborador=>aoNovoColaboradoAdicionado(colaborador)}/>
        

    </div>
  );
}

export default App;
