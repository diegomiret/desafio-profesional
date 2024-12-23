import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { ProductCardComponent } from '../components/ProductCardComponent';
import { CardContent } from '@mui/material';

export const AdminProducts = () => {

    const URL_productos = 'https://mocki.io/v1/204aa3e5-0695-4679-b3e9-d9c9fa1b2bf5';

    const [alojamientos, setAlojamientos] = useState([]);

    //  Cargo los alojamientos
    const fetchProducts = async () => {
      try{
        const response = await fetch(URL_productos);
        const data = await response.json();
        setAlojamientos(data);
        console.log(data);
        console.log(alojamientos);
      }
      catch(error){
        Swal.fire({
          icon: 'error',
          title: '¡Error!',
          text: 'Hubo un problema al cargar los alojamientos'
        });

        console.log('Hubo un erorr: :', error);

      }
    }

    useEffect(() => {
     fetchProducts();
     
    }, [])


  return (
    
    <>






<div className="container mt-5">
      {/* Título alineado a la izquierda */}
      <h1 className="mb-4" style={{ fontSize: '1.75rem', color: '#2c3e50' }}>
        Alojamientos
      </h1>

      <div>
        <button className="btn btn-success" style={{ padding: '8px 20px', fontSize: '1rem' }}>
          Agregar producto
        </button>
      </div>
    </div>

    <div className="container mt-5">

      {alojamientos.map(alojamiento => (
        

        
        <ProductCardComponent
        key={alojamiento.titulo} 
        imagenes={alojamiento.imagenes}
        titulo={alojamiento.titulo}
        descripcion={alojamiento.descripcion}
        ></ProductCardComponent>
        
      ))}

</div>

    </>

  )
}
