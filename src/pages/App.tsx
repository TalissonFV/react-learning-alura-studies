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
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => (
      {
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      }
    )))
  }

  function finalizarTarefa() {
    if (itemSelecionado) {
      setItemSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === itemSelecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        } else {
          return {
            ...tarefa,
            desabilitado: false
          }
        }
      }))

    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa}></Lista>
      <Cronometro itemSelecionado={itemSelecionado} finalizarTarefa={finalizarTarefa} setTarefas={setTarefas}></Cronometro>
    </div>
  )
}

export default App
