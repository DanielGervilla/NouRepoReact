import { useState } from "react";
import foto1 from "./foto1.jpg";
import foto2 from "./foto2.JPG";
import foto3 from "./foto3.jpg";
import foto4 from "./foto4.jpg";

function Galeria() {
    return (
        <div>
            <h1>Galeria</h1>
            <div className="galeria" style={{display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center", alignItems: "center"}}>
                
                <div className="filaa">
                    <div className="foto">
                        <img src={foto1} style={{width: "150px", height: "150px", objectFit: "cover"}} />
                    </div>
                    <div className="foto">
                        <img src={foto2} style={{width: "150px", height: "150px", objectFit: "cover"}} />
                    </div>
                </div>

                <div className="filab">
                    <div className="foto">
                        <img src={foto3} style={{width: "150px", height: "150px", objectFit: "cover"}} />
                    </div>
                    <div className="foto">
                        <img src={foto4} style={{width: "150px", height: "150px", objectFit: "cover"}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Galeria;