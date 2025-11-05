import React from "react";

const ImageContainer = ({ imagePreview }) => {
  return (
    <div className="container left-container">
      <h3>Imagen Original</h3>
      {imagePreview ? (
        <img src={imagePreview} alt="Vista previa" className="image-preview" />
      ) : (
        <div className="placeholder">
          <p>Selecciona una imagen para ver la vista previa</p>
        </div>
      )}
    </div>
  );
};

export default ImageContainer;
