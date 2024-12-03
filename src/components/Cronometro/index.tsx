import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'

export default function Cronometro ():React.JSX.Element {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper}>
                <Relogio></Relogio>
            </div>
            <Botao>Começar</Botao>
        </div>
    )
}