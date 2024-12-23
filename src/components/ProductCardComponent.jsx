import { Description } from "@mui/icons-material"
import '../styles/ProductCardComponent.css'

export const ProductCardComponent = ({imagenes: images, titulo: title, descripcion: description}) => {
  return (


<>



<div className="card" style={{ width: '18rem' }}>
      <img src={images} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary">Editar</button>
          <button className="btn btn-danger">Eliminar</button>
        </div>
      </div>
    </div>



    </>
  )
}
