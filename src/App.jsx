
import './App.scss';
import { useState } from "react";
import  Hero  from "./components/Hero";
import  About  from "./components/About";
import  Educacion from './components/Educacion';
import  Experiencia  from "./components/Experiencia";
import  Competencias  from "./components/Competencias";
import  Voluntariado  from "./components/Voluntariado";
import { CV } from "./CV/CV";

const { hero, about, educacion, experiencia , competencias, voluntariado} = CV;


function App() {
 const [showEducacion, setShowEducacion] = useState(true);
  
  return (

      <div class Name='App' >
      <Hero hero = {hero}/>
      <About about = {about}/>
      <button className='boton1' onClick={()=> setShowEducacion(true)}> Educación
      </button>
      <button className='boton1' onClick={()=> setShowEducacion(false)}> Experiencia
      </button>

      <div>
      {showEducacion ? (
        <Educacion educacion = {educacion}/>
      ):(<Experiencia experiencia = {experiencia}/>)
      };
      </div>
      <Competencias competencias = {competencias}/>
      <Voluntariado voluntariado = {voluntariado}/>
      </div>
  );
}

export default App;
