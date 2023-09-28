import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
// Asegúrate de importar tu archivo CSS personalizado si lo tienes
import datos from "./datos.json"


function PetCatalog({selectedInstitution}) {
    const [dataCarros,setDataCarros]=useState([])
    const [cardsPerRow, setCardsPerRow] = useState(4); // Número de cards por fila

    // Manejador para guardar/desguardar

  
    // Calcula el número de cards por fila en función del ancho de la pantalla
    const calculateCardsPerRow = () => {
      if (window.innerWidth >= 1200) {
        setCardsPerRow(5); // 4 cards por fila en pantallas grandes
      } else if (window.innerWidth >= 992) {
        setCardsPerRow(3); // 3 cards por fila en pantallas medianas
      } else if (window.innerWidth >= 768) {
        setCardsPerRow(2); // 2 cards por fila en pantallas pequeñas
      } else {
        setCardsPerRow(1); // 1 card por fila en pantallas muy pequeñas
      }
    };
  
    useEffect(() => {

        setDataCarros(datos)
      calculateCardsPerRow();
  
      // Escucha los cambios en el tamaño de la pantalla para ajustar el número de cards por fila
      window.addEventListener('resize', calculateCardsPerRow);
  
      // Limpia el evento de cambio de tamaño al desmontar el componente
      return () => {
        window.removeEventListener('resize', calculateCardsPerRow);
      };
    }, []);
  
    // Divide los datos en grupos en función del número de cards por fila
    const groupedCarroCatalogData = [];
    for (let i = 0; i < dataCarros.length; i += cardsPerRow) {
        groupedCarroCatalogData.push(dataCarros.slice(i, i + cardsPerRow));
    }
  
    return (
      <div className="container pet-catalog">
        {groupedCarroCatalogData.map((group, index) => (
          <div className='container cards-container' key={index}>
            <div className="row">
              {group.map((carro) => (
                <div className="col col-catalog" key={carro.carModel}>
                    <Link to={`/carro/${carro.carModel}`}>
                      <img src={carro.image} alt={carro.carMaker} className="card-img-top-catalog" />
                    
                    <div className="card-body card-info">
                      <h3 className="card-title text-title">{carro.carMaker}</h3>
                      <p className="card-text text-body">{carro.carModel}</p>
                      <p className="card-text text-body">{carro.price}</p>
                      <p className="card-text text-body">{carro.carYear}</p>
                    </div>
                    </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default PetCatalog;
  