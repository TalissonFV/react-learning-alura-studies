import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefas";
import { useState } from "react";


interface IProps {
    itemSelecionado: ITarefa | undefined
}

export default function Cronometro ({itemSelecionado}: IProps):React.JSX.Element {
    const [tempo, setTempo] = useState<number>();

    if (itemSelecionado?.tempo) {
        setTempo(tempoParaSegundos(itemSelecionado.tempo))
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio></Relogio>
            </div>
            <Botao>Começar</Botao>
        </div>
    )
}