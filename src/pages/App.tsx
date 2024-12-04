import { useState } from 'react';
import Cronometro from '../components/Cronometro'
import Formulario from '../components/Formulario'
import Lista from '../components/Lista'
import style from './App.module.scss'
import { ITarefa } from '../types/tarefas';


function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [itemSelecionado, setItemSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setItemSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({...tarefa, selecionado: tarefa.id === tarefaSelecionada.id ? true : false})))
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa}></Lista>
      <Cronometro itemSelecionado={itemSelecionado}></Cronometro>
    </div>
  )
}

export default App
