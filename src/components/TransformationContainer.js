import React from "react";

const TransformationContainer = ({ transformedImage }) => {
  return (
    <div className="container right-container">
      <h3>Transformación Lineal (Escala de Grises)</h3>
      {transformedImage ? (
        <div>
          <img
            src={transformedImage}
            alt="Imagen transformada"
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
              Matriz aplicada: Y = 0.2126×R + 0.7152×G + 0.0722×B
            </p>
          </div>
        </div>
      ) : (
        <div
          className="placeholder"
          style={{ color: "#999", marginTop: "10px", display: "block" }}
        >
          <p>La transformación lineal aparecerá aquí</p>
          <small style={{ color: "#999", marginTop: "10px", display: "block" }}>
            Usando álgebra lineal para conversión RGB → Escala de grises
          </small>
        </div>
      )}
    </div>
  );
};

export default TransformationContainer;
