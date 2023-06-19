import { useState } from 'react'
import './App.css'

const AppNavBar = () => {
  return (
    <>
      <h1>Atividade show</h1>
    </>
  )
}

const AppEntrada = (props:any) => {
  return (
    <input
      type="text"
      className="form-control add-task"
      placeholder="Digite seu texto aqui"
      value={props.texto}
      onChange={props.mudarTexto}
    />
  )
}

const AppCloneEntrada = (props:any) => {
  return (
    <label className="fixed-label">{props.texto}</label>
  )
}

const App = () => {
  const [entrada, setEntrada] = useState ("")

  return (
    <div>
      <AppNavBar/>
      <AppEntrada texto={entrada} mudarTexto={(e: any) => setEntrada(e.target.value)}/>
      <br/>
      <AppCloneEntrada texto={entrada}/>
    </div>
  )
}

export default App
