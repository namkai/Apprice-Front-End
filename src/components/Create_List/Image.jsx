import React, { Component } from 'react';

// 🌁🌅
const Image = ({ image, name, handleClick, product }) => {
  const clickedImage = () => handleClick(product, name);
  return (
    <div className="card" onClick={clickedImage}>
      <img className="card-image" src={image} />
      <div className="card-title">
        {name}
      </div>
    </div>

  );
};


export default Image;
