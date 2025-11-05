import React from "react";

const SepiaContainer = ({ sepiaImage }) => {
  return (
    <div className="container right-container">
      <h3>Efecto Sepia</h3>
      {sepiaImage ? (
        <div>
          <img
            src={sepiaImage}
            alt="Imagen con efecto sepia"
            className="transformation-canvas"
          />
          <div className="matrix-info">
            <p>Matriz RGB → Sepia:</p>
            <small
              style={{ display: "block", marginTop: "5px", fontSize: "0.8rem" }}
            >
              R' = 0.393×R + 0.769×G + 0.189×B
              <br />
              G' = 0.349×R + 0.686×G + 0.168×B
              <br />
              B' = 0.272×R + 0.534×G + 0.131×B
            </small>
          </div>
        </div>
      ) : (
        <div className="placeholder">
          <p>El efecto sepia aparecerá aquí</p>
          <small style={{ color: "#999", marginTop: "10px", display: "block" }}>
            Usando transformación lineal de color vintage
          </small>
        </div>
      )}
    </div>
  );
};

export default SepiaContainer;
