import React from "react";

const ImageBlock = ({ image, title, subtitle, height = "300px" }) => {
  return (
    <div
      className="image-block d-flex flex-column justify-content-center align-items-center text-center text-overlay"
      style={{ backgroundImage: `url(${image})`, height }}
    >
      <h1 className="image-title">{title}</h1>
      {subtitle && <p className="image-subtitle">{subtitle}</p>}
    </div>
  ); 
};

export default ImageBlock;
