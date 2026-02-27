import { useState } from "react" 
import './exercici2ccs.css'
function Exercici2() {
    //ESTATS
    const [color , setColor] = useState("white");
    //Funcions Privades
    function red() {
        setColor("red");
    }
    function blue() {
        setColor("blue");
    }
    function green() {
        setColor("green");
    }
    //return amb el html
  return (
    <div className="exercici2">
        <div>
            <p className="cercle" style={{backgroundColor: color}}></p>
        </div>
        <div>
            <button onClick={red}>Red</button>
            <button onClick={blue}>Blue</button>
            <button onClick={green}>Green</button>
        </div> 
    </div>
  )
}

export default Exercici2