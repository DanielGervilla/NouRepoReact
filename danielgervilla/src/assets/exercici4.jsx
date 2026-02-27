import { useState } from "react" 
import pessi from './pessi.jpg'
import normal from './jordi.jpg'
function Exercici4() {
    //ESTATS
    const [imatge, setImatge] = useState(pessi);

    function canviaImatge(){
        if(imatge === pessi){
            setImatge(normal);
        }else{
            setImatge(pessi);
        }
    }
    //return amb el html
  return (
    <div className="exercici4">
        <div>
            <img src={imatge} width="500px"></img>
        </div>
        <div>
            <button onClick={canviaImatge}>Canvia</button>
        </div> 
    </div>
  )
}

export default Exercici4