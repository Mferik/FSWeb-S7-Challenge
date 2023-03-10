import 'react-slideshow-image/dist/styles.css';
import React from "react";
import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';

import HomePageImg from "../Components/Assets/Pizza.jpg";
import HomePageImg2 from "../Components/Assets/Pizza.png";
import HomePageImg3 from "../Components/Assets/pizza1.jpg";
import '../Components/Styles/Home.css'

export const Home = () => {
  const slideImages = [HomePageImg, HomePageImg2, HomePageImg3];
  const properties = {
    duration: 1500,
    transitionDuration: 500,
    infinite: true,
    
  };

  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((image, index) => (
          <div key={index} className="each-slide" style={{ 'backgroundImage': `url(${image})` }}>
          </div>
        ))}
        
      </Slide>
      <div className="order">
        <Link to="/pizza">
          <button>Sipariş Ver</button>
        </Link>
      </div>
    </div>
  );
};
