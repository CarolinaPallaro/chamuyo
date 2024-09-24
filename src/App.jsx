import "./App.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Card, ButtonModal, Footer } from "./components/index";
import { modalsContent } from "./components/modals/arreglo.js";
import ImageCarousel from "./components/carrousel/ImageCarousel.jsx";
function App() {
  const images = [
    "/imgs/nico.png",
    "/imgs/nosotros.png",
    "/imgs/matecito.png",
    "/imgs/nosotros1.png",
    "/imgs/salida.png",
    "/imgs/qcy.png",
    "/imgs/teamo.png",
    "/imgs/rosario.png",
    "/imgs/cine.png",
    "/imgs/juego.png",
    "/imgs/km.png",
  ];

  return (
    <>
      <div className="App">
        <div className="App-tittle">
          <h1>180 días para enamorarse de vos...</h1>

          <p>
            Gracias por compartir todo este tiempo conmigo, por hacerlo tan especial y por encontrarnos siempre
            queriendo ir juntos por más . <br />
            Me hiciste mejor persona, y se que a veces puedo pedir un poco de tiempo, pero al final del día se que tengo
            una persona maravillosa en la cual confiar, y eso me da la seguridad que necesito. <br /> Gracias por ser mi
            compañero, mi amigo y el hombre a quien amo con el alma. <br />
            Te valoro, te respeto y te admiro siempre. Sos un ser maravilloso y que suerte de coincidir en este tiempo,
            en esta vida.
            <br />
            <strong>TE AMO MI SOL</strong>
          </p>
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
      </div>
      <div className="divCarousel">
        <h1 className="tittleCarousel">Así siempre</h1>
        <ImageCarousel images={images} interval={3000} />
      </div>

      <div className="buttons-container">
        {modalsContent.map(content => (
          <ButtonModal key={content.id} text={content.text} paragraphs={content.paragraphs} image={content.image} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;
