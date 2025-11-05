import React from "react";
import "./TutorialSection.css";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

const TutorialSection = () => {
  return (
    <div className="tutorial-section">
      <div className="tutorial-container">
        <h2>
          📚 Fundamentos Teóricos: Transformaciones Lineales en Procesamiento de
          Imágenes
        </h2>
        <p className="tutorial-intro">
          Cada transformación aplicada en esta aplicación utiliza conceptos
          fundamentales del álgebra lineal. A continuación se explica la teoría
          matemática detrás de cada proceso:
        </p>

        {/* Transformación 1: Escala de Grises */}
        <div className="tutorial-item">
          <h3>🎨 1. Transformación a Escala de Grises</h3>
          <div className="tutorial-content">
            <p>
              <strong>Objetivo:</strong> Convertir una imagen RGB a escala de
              grises usando una transformación lineal.
            </p>

            <p>
              <strong>Fundamento Teórico:</strong>
            </p>
            <p>
              La transformación utiliza los coeficientes de luminancia estándar
              ITU-R BT.709 que consideran la percepción visual humana de
              diferentes colores.
            </p>

            <div className="formula-box">
              <h4>Fórmula Matemática:</h4>
              <BlockMath>Y = 0.2126R + 0.7152G + 0.0722B</BlockMath>
            </div>

            <div className="formula-box">
              <h4>Representación Matricial:</h4>
              <BlockMath>
                {`\\begin{bmatrix} Y \\end{bmatrix} = \\begin{bmatrix} 0.2126 & 0.7152 & 0.0722 \\end{bmatrix} \\times \\begin{bmatrix} R \\\\ G \\\\ B \\end{bmatrix}`}
              </BlockMath>
            </div>

            <div className="steps-box">
              <h4>Pasos del Algoritmo:</h4>
              <ol>
                <li>Obtener los valores RGB de cada píxel</li>
                <li>Aplicar la transformación lineal con los coeficientes</li>
                <li>Asignar el valor Y calculado a los tres canales RGB</li>
                <li>Resultado: RGB(Y, Y, Y) = píxel en escala de grises</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Transformación 2: Volteo 180° */}
        <div className="tutorial-item">
          <h3>🔄 2. Transformación de Rotación (Volteo 180°)</h3>
          <div className="tutorial-content">
            <p>
              <strong>Objetivo:</strong> Rotar la imagen 180° usando
              transformaciones lineales de reflexión.
            </p>

            <p>
              <strong>Fundamento Teórico:</strong>
            </p>
            <p>
              Se aplican dos reflexiones consecutivas: una horizontal y una
              vertical, equivalente a una rotación de 180°.
            </p>

            <div className="formula-box">
              <h4>Matriz de Transformación:</h4>
              <BlockMath>
                {`T = \\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix} \\times \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} -x \\\\ -y \\end{bmatrix}`}
              </BlockMath>
            </div>

            <div className="formula-box">
              <h4>Transformación de Coordenadas:</h4>
              <BlockMath>
                {`\\begin{aligned}
                  x' &= -x + width \\\\
                  y' &= -y + height
                \\end{aligned}`}
              </BlockMath>
            </div>

            <div className="steps-box">
              <h4>Pasos del Algoritmo:</h4>
              <ol>
                <li>Configurar el contexto del canvas</li>
                <li>Trasladar el origen al centro de la imagen</li>
                <li>Aplicar la transformación scale(-1, -1)</li>
                <li>Dibujar la imagen con las nuevas coordenadas</li>
                <li>Restaurar el contexto original</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Transformación 3: Efecto Sepia */}
        <div className="tutorial-item">
          <h3>🟤 3. Transformación de Efecto Sepia</h3>
          <div className="tutorial-content">
            <p>
              <strong>Objetivo:</strong> Aplicar un efecto vintage sepia usando
              una matriz de transformación lineal.
            </p>

            <p>
              <strong>Fundamento Teórico:</strong>
            </p>
            <p>
              Utiliza una matriz 3×3 que combina linealmente los canales RGB
              para crear tonos cálidos característicos del sepia.
            </p>

            <div className="formula-box">
              <h4>Matriz de Transformación Sepia:</h4>
              <BlockMath>
                {`\\begin{bmatrix} R' \\\\ G' \\\\ B' \\end{bmatrix} = \\begin{bmatrix} 0.393 & 0.769 & 0.189 \\\\ 0.349 & 0.686 & 0.168 \\\\ 0.272 & 0.534 & 0.131 \\end{bmatrix} \\times \\begin{bmatrix} R \\\\ G \\\\ B \\end{bmatrix}`}
              </BlockMath>
            </div>

            <div className="formula-box">
              <h4>Fórmulas Específicas:</h4>
              <BlockMath>
                {`\\begin{aligned}
                  R' &= 0.393R + 0.769G + 0.189B \\\\
                  G' &= 0.349R + 0.686G + 0.168B \\\\
                  B' &= 0.272R + 0.534G + 0.131B
                \\end{aligned}`}
              </BlockMath>
            </div>

            <div className="steps-box">
              <h4>Pasos del Algoritmo:</h4>
              <ol>
                <li>Obtener los valores RGB originales</li>
                <li>Aplicar la matriz de transformación sepia</li>
                <li>Limitar los valores al rango [0, 255]</li>
                <li>Asignar los nuevos valores R', G', B'</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Transformación 4: Desenfoque */}
        <div className="tutorial-item">
          <h3>🌫️ 4. Filtro de Desenfoque (Convolución Gaussiana)</h3>
          <div className="tutorial-content">
            <p>
              <strong>Objetivo:</strong> Suavizar la imagen aplicando un filtro
              gaussiano mediante convolución.
            </p>

            <p>
              <strong>Fundamento Teórico:</strong>
            </p>
            <p>
              La convolución es una operación matemática que combina cada píxel
              con sus vecinos usando un kernel (matriz de pesos).
            </p>

            <div className="formula-box">
              <h4>Kernel Gaussiano 3×3:</h4>
              <BlockMath>
                {`K = \\frac{1}{16} \\times \\begin{bmatrix} 1 & 2 & 1 \\\\ 2 & 4 & 2 \\\\ 1 & 2 & 1 \\end{bmatrix}`}
              </BlockMath>
            </div>

            <div className="formula-box">
              <h4>Operación de Convolución:</h4>
              <BlockMath>
                {`P'(x,y) = \\sum_{i=-1}^{1} \\sum_{j=-1}^{1} K(i,j) \\times P(x+i, y+j)`}
              </BlockMath>
            </div>

            <div className="steps-box">
              <h4>Pasos del Algoritmo:</h4>
              <ol>
                <li>Para cada píxel (x, y) en la imagen</li>
                <li>Obtener los 9 píxeles vecinos en una matriz 3×3</li>
                <li>Multiplicar cada vecino por su peso correspondiente</li>
                <li>Sumar todos los productos y dividir por 16</li>
                <li>Asignar el resultado al píxel central</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Transformación 5: Nitidez */}
        <div className="tutorial-item">
          <h3>✨ 5. Filtro de Nitidez (Realce de Bordes)</h3>
          <div className="tutorial-content">
            <p>
              <strong>Objetivo:</strong> Mejorar la definición de la imagen
              realzando los bordes y detalles.
            </p>

            <p>
              <strong>Fundamento Teórico:</strong>
            </p>
            <p>
              Utiliza un kernel de realce que amplifica las diferencias entre
              píxeles adyacentes, destacando los bordes.
            </p>

            <div className="formula-box">
              <h4>Kernel de Realce:</h4>
              <BlockMath>
                {`K = \\begin{bmatrix} 0 & -1 & 0 \\\\ -1 & 5 & -1 \\\\ 0 & -1 & 0 \\end{bmatrix}`}
              </BlockMath>
            </div>

            <div className="formula-box">
              <h4>Operación de Convolución:</h4>
              <BlockMath>
                {`P'(x,y) = -P(x,y-1) - P(x-1,y) + 5 \\times P(x,y) - P(x+1,y) - P(x,y+1)`}
              </BlockMath>
              Ó
              <BlockMath>
                {`P'(x,y) = \\sum_{i=-1}^{1} \\sum_{j=-1}^{1} K(i,j) \\times P(x+i, y+j)`}
              </BlockMath>
            </div>

            <div className="steps-box">
              <h4>Pasos del Algoritmo:</h4>
              <ol>
                <li>Para cada píxel central P(x,y)</li>
                <li>
                  Obtener los 4 píxeles adyacentes (arriba, abajo, izquierda,
                  derecha)
                </li>
                <li>Aplicar la fórmula: 5×centro - suma_de_adyacentes</li>
                <li>Limitar el resultado al rango [0, 255]</li>
                <li>El resultado realza los contrastes y bordes</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="tutorial-footer">
          <p>
            <strong>💡 Nota:</strong> Todas estas transformaciones demuestran
            aplicaciones prácticas del álgebra lineal en el procesamiento
            digital de imágenes, desde operaciones matriciales hasta
            convoluciones avanzadas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TutorialSection;
