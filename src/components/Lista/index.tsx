import { ITarefa } from '../../types/tarefas';
import Item from './Item/item'
import style from './Lista.module.scss'

interface IProps {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void 
}

export default function Botao ({ tarefas, selecionaTarefa }: IProps): React.JSX.Element{
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {
                tarefas.map(tarefa => (
                    <Item
                        selecionaTarefa={selecionaTarefa} 
                        key={tarefa.id}
                        {...tarefa}
                    ></Item>
                ))}
            </ul>
        </aside>
    )
}