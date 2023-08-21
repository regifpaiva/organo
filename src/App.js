



import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulário';
import Time from './componentes/Time';




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
        <Time nome="Programação"/>
        <Time nome="Front-End"/>
        <Time nome="Data Science"/>



    </div>
  );
}

export default App;
