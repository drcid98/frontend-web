import React, { useState } from 'react';
import './Rules.css'
import DCConquista from '../assets/DCConquista.jpeg'
import Motherboard from '../assets/motherboard.png'
import Diego from '../assets/diego.jpeg'
import Gloria from '../assets/gloria.jpg'
import Button from '../common/Button'


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
    Diego,
    Gloria
  ];

  // Aca hayq ue agregar un texto para cada imagen en orden. El texto
  // deberian ser las instrucciones y cosas por el estilo

  const texts = [
    "texto 1 llala",
    "texto2 asdfjda",
    "tecsddjk",
    "aaaaaaaaaaaaa"
  ]

  return (
    <div className="Rules">
      <ImageSlider images={images} texts={texts} />
    </div>
  );
}

