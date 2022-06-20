
  import React from 'react'
  import "./Experiencia.scss"
  
  const Experiencia = ({experiencia}) => {
    return (
      <div className='experiencia'>
      <h3> - Experiencia - </h3>
      {experiencia.map((item => {
        return (
          <div key={JSON.stringify(item)}>
              <h4>{item.nombre}</h4>
              <h5>{item.puesto}</h5>
              <p>{item.fecha}</p>
              <p>{item.descripcion}</p>
            </div>
        )
      }
      ))}
      
      
      </div>
    )
  }
  
  export default Experiencia

