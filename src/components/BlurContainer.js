import React from "react";

const BlurContainer = ({ blurImage }) => {
  return (
    <div className="container right-container">
      <h3>Desenfoque (Convolución Gaussiana)</h3>
      {blurImage ? (
        <div>
          <img
            src={blurImage}
            alt="Imagen con desenfoque"
            className="transformation-canvas"
          />
          <div className="matrix-info">
            <p
              style={{
                fontSize: "12px",
                wordBreak: "break-all",
                lineHeight: "1.3",
                padding: "5px",
              }}
            >
              Kernel aplicado: Gaussiano 3x3 = [1,2,1; 2,4,2; 1,2,1] / 16
            </p>
          </div>
        </div>
      ) : (
        <div
          className="placeholder"
          style={{ color: "#999", marginTop: "10px", display: "block" }}
        >
          <p>El desenfoque aparecerá aquí</p>
          <small style={{ color: "#999", marginTop: "10px", display: "block" }}>
            Usando convolución con kernel gaussiano para suavizar la imagen
          </small>
        </div>
      )}
    </div>
  );
};

export default BlurContainer;
