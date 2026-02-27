import { useState } from "react" 
import './exercici3ccs.css'
function Exercici3() {
    //ESTATS
    const [estil , setEstil] = useState("normal");
    //return amb el html
  return (
    <div className="exercici3">
        <div>
            <p className={estil}>Lorem Ipsum</p>
        </div>
        <div>
            <button onClick={() => setEstil("Negreta")}  onDoubleClick={() => setEstil("normal")}>Negreta</button>
            <button onClick={() => setEstil("Cursiva")} onDoubleClick={() => setEstil("normal")}>Cursiva</button>
            <button onClick={() => setEstil("Subrratllat")} onDoubleClick={() => setEstil("normal")}>Subrratllat</button>
        </div> 
    </div>
  )
}

export default Exercici3