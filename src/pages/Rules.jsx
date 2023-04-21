import React, { useState } from 'react';
import './Rules.css'
import DCConquista from '../assets/DCConquista.jpeg'
import Motherboard from '../assets/motherboard.png'
import Motherboard2 from '../assets/motherboard_2.png'
import Motherboard3 from '../assets/motherboard_3.png'
import Motherboard4 from '../assets/motherboard_4.png'
import Button from '../common/Button'
import Layout from '../common/Layout';
import Board from '../game/Board';


const ImageSlider = ({ images, texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
      <div className="slider">
        <button onClick={handlePrevClick}>Prev</button>
        <div className="image-container">
          {images.map((image, index) => (
            <div key={index} className="image-container__item">
              <img
                key={index}
                className={`slider-image ${
                  index === currentIndex ? "active" : ""
                }`}
                src={image}
                alt={`Image ${index}`}
              />
              <div className="text-box">{texts[currentIndex]}</div>
            </div>
          ))}
        </div>
        <button onClick={handleNextClick}>Next</button>
      </div>
  );
};


export default function Rules() {

  // Aca hay que chantar algunas imagenes bonitas y acordes al tema.
  // Las que hay son solo para mostrar el funcionamiento

  const images = [
    DCConquista,
    Motherboard,
    Motherboard2,
    Motherboard3,
    Motherboard4
  ];

  // Aca hayq ue agregar un texto para cada imagen en orden. El texto
  // deberian ser las instrucciones y cosas por el estilo

  const texts = [
    "DCConquista es un juego de entre 2 a 4 jugadores.\nEl objetivo del juego es conquistar todos los territorios del mapa.",
    "Los territorios del mapa son divididos entre los jugadores y cada uno recibe la misma cantidad de tropas en total.",
    "Cada turno de un jugador consiste en 3 partes: Refuerzo, Ataque y Fortalecimiento.",
    "Se captura un territorio cuando se derrota a la última tropa en él. Cuando esto sucede se debe mover al menos 3 tropas a este nuevo territorio.",
    "El juego termina cuando un jugador posee todos los territorios del mapa. Para derrotar a un contrincante, el jugador atacante debe conquistar todos sus territorios en un solo turno."
  ]

  return (
    <Layout>
    <div className="Rules">
      <h1>Reglas</h1>
      <ImageSlider images={images} texts={texts} />
      <h1> Instrucciones </h1>
      <Board />
    </div>
    
    </Layout>
  );
}

