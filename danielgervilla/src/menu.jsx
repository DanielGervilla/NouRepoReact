function Menu({canviarTasca}) {
    //ESTATS
    const menuItems = ["Exercici 1", 
        "Exercici 2", 
        "Exercici 3", 
        "Exercici 4", 
        "Galeria", 
        "Carrussel", 
        "Tasca3",
        "Tasca4_1",
        "Tasca4_2",
        "Tasca5",];
    function onClickMenuItem(item) {
        canviarTasca(item)
    }

  return (
    <div className="medio">
        {menuItems.map((item, index) => (
            <button key={index} onClick={() => onClickMenuItem(item)}>
                {item}
            </button>
        ))}
    </div>)
}

export default Menu