import React from 'react';
import "./Voluntariado.scss";

const Voluntariado = ({voluntariado}) => {
  return (
   
     <div className='voluntariado'>
     <h3> - Voluntariado - </h3>
     <h4>{voluntariado.nombre}</h4>
     <p>{voluntariado.descripcion}</p>
     <a href='link'>{voluntariado.link}</a>
     

    </div>
   
  );
}
    

    
    


export default Voluntariado