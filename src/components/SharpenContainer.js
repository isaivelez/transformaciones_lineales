import React from "react";

const SharpenContainer = ({ sharpenImage }) => {
  return (
    <div className="container right-container">
      <h3>Nitidez (Realce de Bordes)</h3>
      {sharpenImage ? (
        <div>
          <img
            src={sharpenImage}
            alt="Imagen con nitidez mejorada"
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
              Kernel aplicado: Realce = [0,-1,0; -1,5,-1; 0,-1,0]
            </p>
          </div>
        </div>
      ) : (
        <div
          className="placeholder"
          style={{ color: "#999", marginTop: "10px", display: "block" }}
        >
          <p>La nitidez mejorada aparecerá aquí</p>
          <small style={{ color: "#999", marginTop: "10px", display: "block" }}>
            Usando kernel de realce para mejorar la definición de la imagen
          </small>
        </div>
      )}
    </div>
  );
};

export default SharpenContainer;
