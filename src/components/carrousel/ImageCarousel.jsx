import React, { useState, useEffect } from "react";
import './carousel.css'

const ImageCarousel = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="carousel-item">
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button onClick={goToPrevious} className="carousel-control prev" aria-label="Previous slide">
        &#10094;
      </button>
      <button onClick={goToNext} className="carousel-control next" aria-label="Next slide">
        &#10095;
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`carousel-indicator ${currentIndex === index ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
