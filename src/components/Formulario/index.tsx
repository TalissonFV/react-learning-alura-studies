import { useState } from 'react'
import Botao from '../Botao'
import style from './Formulario.module.scss'
import { ITarefa } from '../../types/tarefas';
import { v4 as uuidv4 } from 'uuid'

interface IProps {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}


export default function Formulario({setTarefas}: IProps):React.JSX.Element {

    const [nome, setNome] = useState("");
    const [tempo, setTempo] = useState("00:00");

    const salvarTarefa = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        setTarefas((tarefasState) => [...tarefasState, {nome, tempo, selecionado: false, completado: false, id: uuidv4()}])
        setNome('')
        setTempo("00:00")
    }

    return (
        <form className={style.novaTarefa} onSubmit={salvarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor='nome'>Adicione um novo estudo</label>
                <input type='text' value={nome} onChange={(evento) => setNome(evento.target.value)} name='nome' id='nome' placeholder='O que você quer estudar?' required></input>
            </div>
            <div className={style.inputContainer}>
                <label htmlFor='tempo'>Tempo</label>
                <input type='time' onChange={(evento) => setTempo(evento.target.value)} value={tempo} step='1' id='tempo' name='tempo' min='00:00:00' max='01:30:00' required></input>
            </div>
            <Botao type="submit"> Adicionar </Botao>
        </form>
    )
}