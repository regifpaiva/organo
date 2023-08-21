import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props)=> {
    const placeholderModificada = `${props.placeholder}...`
    //let valor ='Guilherme Silveira';


    const [valor, setValor]= useState('Guilherme Silveira');
const aoDigitado = (evento)=> {
    props.aoAlterado(evento.target.value)
}
        return (
            <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado}required={props.obrigatorio} placeholder={props.placeholderModificada}/>
        </div>
        )

}

export default CampoTexto;