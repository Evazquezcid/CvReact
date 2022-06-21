
import React from 'react';
import "./Educacion.scss";

const Educacion = ({educacion}) => {
  return (
    <div>
      <div className="educacion">
      <h3> - Educación - </h3>
        {educacion.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="nombre">✏️{item.nombre}</p>
              <p>{item.fecha}</p>
              <p>{item.donde}</p>
              {/* <img src={item.imagen} alt="" /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
  
}

export default Educacion