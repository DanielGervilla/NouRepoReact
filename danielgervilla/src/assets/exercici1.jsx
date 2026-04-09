import { useState } from "react" 
function Exercici1() {
    //ESTATS
    const [contador, setContador] = useState(0);
    //Funcions Privades
    function incrementar() {
        setContador(contador + 1);
    }
    function decrementar() {
        setContador(contador - 1);
    }
    //return amb el html
  return (
    <div>
        <h1>Exercici 1</h1>
        <div className="numero">
            {contador}
        </div>
        <div className="botons">
            <button className="decrementar" onClick={decrementar}>- Decrementar</button>
            <button className="incrementar" onClick={incrementar}>+ Incrementar</button>
        </div>
    </div>
  )
}

export default Exercici1