import React from "react";

const FlippedContainer = ({ flippedImage }) => {
  return (
    <div className="container left-container">
      <h3>Imagen Volteada (180°)</h3>
      {flippedImage ? (
        <div>
          <img
            src={flippedImage}
            alt="Imagen volteada"
            className="transformation-canvas"
          />
          <div className="matrix-info">
            <p>Matriz aplicada: Rotación 180° = [-1, 0; 0, -1]</p>
          </div>
        </div>
      ) : (
        <div className="placeholder">
          <p>La imagen volteada aparecerá aquí</p>
          <small style={{ color: "#999", marginTop: "10px", display: "block" }}>
            Usando transformación lineal de rotación
          </small>
        </div>
      )}
    </div>
  );
};

export default FlippedContainer;
