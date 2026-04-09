import coco from "../tasca3/coco.jpg";
import chimpanze from "../tasca3/chimpanze.jpg";
import lleo from "../tasca3/lleo.jpg";
import perezoso from "../tasca3/perezoso.jpg";
import camell from "../tasca3/camell.jpg";
import Grid from "@mui/material/Grid";

const anuimaloskis = [
  {
    imatge: coco,
    titol: "Cocodril",
    text: "El cocodril és un rèptil semiaquàtic que es troba en regions tropicals d'Àfrica, Àsia, Amèrica i Austràlia.",
    botoshare: "Apadrina",
    botolearnmore: "Més Info",
    botolearnmoreenllaç: "https://es.wikipedia.org/wiki/Crocodylidae",
    botoshareenllaç:
      "http://www.amasquefa.com/html2/public/entitats?id=162&showContent=SECCIONS&content=24337"
  },
  {
    imatge: chimpanze,
    titol: "Ximpanzé",
    text: "El ximpanzé és un dels primats més intel·ligents, amb una gran capacitat de resolució de problemes.",
    botoshare: "Apadrina",
    botolearnmore: "Més Info",
    botolearnmoreenllaç:
      "https://es.wikipedia.org/wiki/Pan_troglodytes",
    botoshareenllaç:
      "https://movilizateporlaselva.org/apadrina/"
  },
  {
    imatge: lleo,
    titol: "Lleó",
    text: "El lleó és un dels animals més emblemàtics de la sabana africana, conegut per la seva força i majestuositat.",
    botoshare: "Apadrina",
    botolearnmore: "Més Info",
    botolearnmoreenllaç:
      "https://es.wikipedia.org/wiki/Panthera_leo",
    botoshareenllaç:
      "https://safariaitana.es/D/product/apadrina-un-animal/"
  },
  {
    imatge: perezoso,
    titol: "Peresós",
    text: "El peresós és un mamífer arborícola que es caracteritza per la seva lentitud i la seva vida en els arbres.",
    botoshare: "Apadrina",
    botolearnmore: "Més Info",
    botolearnmoreenllaç:
      "https://es.wikipedia.org/wiki/Folivora",
    botoshareenllaç:
      "https://www.theslothinstitute.org/es/get-involved/adopt-a-sloth-the-sloth-institute/"
  },
  {
    imatge: camell,
    titol: "Camell",
    text: "El camell és un animal adaptat a les condicions desèrtiques, tenint la capacitat de resistir llargues travessies sense aigua.",
    botoshare: "Apadrina",
    botolearnmore: "Més Info",
    botolearnmoreenllaç:
      "https://es.wikipedia.org/wiki/Camelus",
    botoshareenllaç:
      "https://oasiswildlifefuerteventura.com/apadrinamiento/"
  }
];
function Tasca3({imatge, titol, text, botoshare, botolearnmore,  botolearnmoreenllaç, botoshareenllaç}) {
    return (
            <div style={{display:"flex", flexDirection: "column", width: "345px", gap: "10px ", backgroundColor: "#2f2c2c", borderRadius: "5px", paddingBottom: "10px", overflow: "hidden"}}>
                    <img src={imatge} style={{width: "100%", height: "200px", objectFit: "cover", overflow: "hidden"}}/>
                <div style={{display: "flex", flexDirection: "column", padding: "10px"}}>
                    <p style={{fontSize: "20px", fontWeight:"bold", margin: "0", textAlign:"left"}}>{titol}</p>
                    <p style={{margin: "0", textAlign:"left"}}>{text}</p>
                </div>
                <div style={{display: "flex", gap: "10px",  padding: "5px"}}>
                    <button onClick={() => window.open(botoshareenllaç)} style={{backgroundColor: "#3f3d3d", borderRadius: "5px"}}>{botoshare}</button>
                    <button onClick={() => window.open(botolearnmoreenllaç)} style={{backgroundColor: "#3f3d3d", borderRadius: "5px"}}>{botolearnmore}</button>
                </div>
            </div>

        
    )
}
function Tasca4_2() {
  return (
    <Grid container spacing={2} style={{ padding: "20px", paddingTop: "80px", justifyContent: "center"}}>
      {anuimaloskis.map((animal, index) => (
        <Grid  size={{ xs: 12, sm: 6, lg: 3 }}>
          <Tasca3
            imatge={animal.imatge}
            titol={animal.titol}
            text={animal.text}
            botoshare={animal.botoshare}
            botolearnmore={animal.botolearnmore}
            botolearnmoreenllaç={animal.botolearnmoreenllaç}
            botoshareenllaç={animal.botoshareenllaç}
          />
        </Grid>
      ))}
    </Grid>
  );
}


export default Tasca4_2;