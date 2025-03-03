import { ITarefa } from '../../../types/tarefas'
import style from './Item.module.scss'


interface IProps extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item ({nome, tempo, selecionado, completado, id, selecionaTarefa}: IProps):React.JSX.Element {
    
    return (
        <li className={`${style.item} ${ selecionado ? style.itemSelecionado : ''}`} onClick={() => selecionaTarefa({nome, tempo, selecionado, completado, id})}> 
            <h3>{nome}</h3>
            <span>{tempo}</span>
        </li>
    )
}