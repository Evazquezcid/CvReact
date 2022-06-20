import React from 'react'
import "./Hero.scss";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.foto} alt="" />
      <div className="card">
      <h2>
        {hero.nombre}
      </h2>
      <h4>
      {hero.ciudad}
      </h4>
       <p>
          <a href={"mailto:" + hero.email}>
          esthervazquezcid@gmail.com
          </a>
        </p>
        <p>{hero.telefono}</p>
        <p><a href={hero.gitHub}>
            GitHub
          </a></p>
          <p><a href={hero.linkedin}>
            Linkedink
          </a></p>
      </div>
    </div>
    
    
  );
}
export default Hero;