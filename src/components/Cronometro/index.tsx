import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefas";
import { useEffect, useState } from "react";


interface IProps {
    itemSelecionado: ITarefa | undefined,
    finalizarTarefa: () => void,
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

export default function Cronometro({ itemSelecionado, finalizarTarefa, setTarefas }: IProps): React.JSX.Element {
    const [tempo, setTempo] = useState<number>();


    useEffect(() => {
        if (itemSelecionado?.tempo) {
            setTempo(tempoParaSegundos(itemSelecionado.tempo))
        }
    }, [itemSelecionado])

    function regressiva (contador: number) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador-1)
                return (regressiva(contador - 1))
            }
            finalizarTarefa()
        }, 1000)
    }

    function handleClick(contador: number = 0) {
        regressiva(contador)
        setTarefas(prevState => (prevState.map(tarefa => {
            if (tarefa.id !== itemSelecionado?.id) {
                tarefa.desabilitado = true
            }
            return tarefa
        })))
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}></Relogio>
            </div>
            <Botao onClick={() => handleClick(tempo)}>Começar</Botao>
        </div>
    )
}