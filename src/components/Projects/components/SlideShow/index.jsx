"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const ImageSlideshow = ({ 
  image1,
  image2,
  image3,
}) => {
  const images = [image1.img, image2.img, image3.img].filter(Boolean);
  const title = [image1.title, image2.title, image3.title].filter(Boolean);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (images.length === 0) {
    return <div>No images to display</div>;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <h1 
      style={{display : 'flex', justifyContent:'center',padding : '1rem' , color : '#6cb4ee'}}>
        
        {title[currentIndex]}
        
        </h1>
      <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '10px' }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
 
            style={{ width: '100%', height: '100%' }}
          >
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              onClick={toggleZoom}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {images.length > 1 && (
          <>
            <button onClick={prevSlide} style={buttonStyle}>
              Précédent
            </button>
            <button onClick={nextSlide} style={buttonStyle}>
              Suivant
            </button>
          </>
        )}
      </div>
      {isZoomed && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <TransformWrapper
            initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <React.Fragment>
                <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1001, display: 'flex', gap: '10px' }}>
                  <button onClick={() => zoomIn()} style={buttonStyle}>Zoom +</button>
                  <button onClick={() => zoomOut()} style={buttonStyle}>Zoom -</button>
                  <button onClick={() => resetTransform()} style={buttonStyle}>Reset</button>
                  <button onClick={toggleZoom} style={buttonStyle}>Fermer</button>
                </div>
                <TransformComponent>
                  <img
                    src={images[currentIndex]}
                    alt={`Zoomed Slide ${currentIndex + 1}`}
                    style={{
                      maxWidth: '90vw',
                      maxHeight: '90vh',
                      objectFit: 'contain',
                    }}
                  />
                </TransformComponent>
              </React.Fragment>
            )}
          </TransformWrapper>
        </div>
      )}
    </div>
  );
};

const buttonStyle = {
  display: "flex",
  background: '#6cb4ee',
  color: 'white',
  border: 'none',
  padding: '10px',
  margin: '5px',
  cursor: 'pointer',
  borderRadius: '5px',
};

export default ImageSlideshow;

