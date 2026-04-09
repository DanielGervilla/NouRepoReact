import { useState } from "react";
import foto1 from "./foto1.jpg";
import foto2 from "./foto2.JPG";
import foto3 from "./foto3.jpg";
import foto4 from "./foto4.jpg";

function Carrussel() {
    const [index, setIndex] = useState(0);
    const fotos = [foto1, foto2, foto3, foto4];
    const seguent = () => {
        setIndex((prevIndex) => (prevIndex + 1) % fotos.length);
    };
    const prev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + fotos.length) % fotos.length);
    };  
    return (
        <div>
            <h1>Carrussel</h1>  
            <div className="carrussel" style={{display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center"}}>
                <div className="foto">
                    <img src={fotos[index]} style={{width: "200px", height: "200px", objectFit: "cover"}} />
                </div>
                <div className="controls" style={{display: "flex", flexDirection: "row", gap: "10px"}}>
                    <button onClick={prev}>Anterior</button>
                    <button onClick={seguent}>Següent</button>
                </div>
            </div>
        </div>
    )
}
export default Carrussel;