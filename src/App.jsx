

import "./App.css";
import React,{useRef} from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import {Card, ButtonModal, Footer  } from './components/index';
import {modalsContent} from './components/modals/arreglo.js'

  


function App() {
  

  

    

  
  return (
    <>

    <div className="App-tittle">
    <span className="luna"></span>
      <h1>30 motivos para enamorarse de vos</h1>
    </div>


   <div className="cards-container">
                <Card title=".1" paragraph="Tenés un 🤍 enorme" />
                <Card title=".2" paragraph="Sos una persona muy curiosa" />
                <Card title=".3" paragraph="Tenés una sonrisa hermosa" />
                <Card title=".4" paragraph="Tu sentido del humor" />
                 <Card title=".5" paragraph="La dulzura con la que hablas" />
                  <Card title=".6" paragraph="Tu empatía" />
                  <Card title=".7" paragraph="Que sigas usando Ahre / xD y (?" />
                  <Card title=".8" paragraph="Estás muy pendiente de los que querés y te importan" />
                  <Card title=".9" paragraph="Das muuuuuuuuuuy buenos abrazos" />
                  <Card title=".10" paragraph="Sos compinche en todas" />
   </div>
             

   
    <div className="buttons-container">
       
        {modalsContent.map((content) => (
        <ButtonModal
          key={content.id}
          text={content.text}
          paragraphs={content.paragraphs}
          image={content.image}
        />
      ))}

   </div>

   <Footer/>    
      
   </>

     
     

    
  );
}

export default App;
