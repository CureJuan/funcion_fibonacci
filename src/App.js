
import './App.css';
import { useState } from "react"

function App() {
  const [resultado, setResultado] = useState([]);
  const [mostrarOcultar, setMostrarOcultar] = useState(false);

  const fibonacci = (num) => {
    const f = [0, 1];

    for (let i = 2; i <= num; i++) {
      f[i] = f[i - 1] + f[i - 2]
      setResultado(f[num]);
    }
  }
  const mostrar = () => {
    setMostrarOcultar(!mostrarOcultar);
    document.getElementById("input").value = ""
    return <div>{resultado}</div>
  }

  return (
    <>
      <h1 className="titulo">Funcion Fibonacci</h1>
      <p>La Funcion Fibonacci se trata de una secuencia infinita de numeros naturales</p>
      <p>f (n) = f (n-1) + f (n-2)</p>
      <p><b>Realizado por Juan Carlos Iasenza</b></p>
      <br />
      <input className="numero" id="input" placeholder='Ingrese un numeo' type="text" onChange={e => fibonacci(e.target.value)} />

      <button className="boton" onClick={() => mostrar()}>
        {mostrarOcultar ? `Borrar` : `Mostrar`}
      </button>
      <div className={mostrarOcultar ? "show-element" : null}>
        {mostrarOcultar && <h3>{resultado}</h3>}
      </div>
    </>
  );
}

export default App;
