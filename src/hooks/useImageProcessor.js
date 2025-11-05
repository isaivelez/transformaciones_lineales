import { useState, useRef } from "react";

const useImageProcessor = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [transformedImage, setTransformedImage] = useState(null);
  const [flippedImage, setFlippedImage] = useState(null);
  const [sepiaImage, setSepiaImage] = useState(null);
  const canvasRef = useRef(null);
  const flipCanvasRef = useRef(null);
  const sepiaCanvasRef = useRef(null);

  // Matriz de transformación lineal para convertir RGB a escala de grises
  // Basada en los coeficientes de luminancia estándar ITU-R BT.709
  const grayScaleMatrix = [
    0.2126,
    0.7152,
    0.0722, // Coeficientes para el canal Red, Green, Blue
  ];

  // Función para aplicar transformación lineal RGB -> Escala de grises
  const applyLinearTransformation = (r, g, b) => {
    // Aplicamos la transformación lineal: Y = 0.2126*R + 0.7152*G + 0.0722*B
    const gray = Math.round(
      grayScaleMatrix[0] * r + grayScaleMatrix[1] * g + grayScaleMatrix[2] * b
    );
    return [gray, gray, gray]; // RGB con el mismo valor para escala de grises
  };

  // Función para aplicar transformación lineal de efecto sepia
  const applySepiaTransformation = (r, g, b) => {
    // Matriz de transformación lineal para efecto sepia
    // Basada en las fórmulas estándar de sepia
    const sepiaR = Math.min(255, Math.round(0.393 * r + 0.769 * g + 0.189 * b));
    const sepiaG = Math.min(255, Math.round(0.349 * r + 0.686 * g + 0.168 * b));
    const sepiaB = Math.min(255, Math.round(0.272 * r + 0.534 * g + 0.131 * b));
    return [sepiaR, sepiaG, sepiaB];
  };

  const processImageWithLinearTransformation = (img) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Configurar el canvas con las dimensiones apropiadas
    const containerWidth = 500; // Ancho aproximado del contenedor
    const containerHeight = 400; // Alto aproximado del contenedor

    // Calcular las dimensiones manteniendo la proporción
    const aspectRatio = img.width / img.height;
    let drawWidth, drawHeight;

    if (aspectRatio > containerWidth / containerHeight) {
      drawWidth = containerWidth;
      drawHeight = containerWidth / aspectRatio;
    } else {
      drawHeight = containerHeight;
      drawWidth = containerHeight * aspectRatio;
    }

    canvas.width = drawWidth;
    canvas.height = drawHeight;

    // Dibujar la imagen original en el canvas
    ctx.drawImage(img, 0, 0, drawWidth, drawHeight);

    // Obtener los datos de píxeles
    const imageData = ctx.getImageData(0, 0, drawWidth, drawHeight);
    const data = imageData.data;

    // Aplicar transformación lineal a cada píxel
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i]; // Canal rojo
      const g = data[i + 1]; // Canal verde
      const b = data[i + 2]; // Canal azul
      // data[i + 3] es el canal alpha (transparencia), lo dejamos igual

      // Aplicar la transformación lineal
      const [newR, newG, newB] = applyLinearTransformation(r, g, b);

      data[i] = newR; // Nuevo valor rojo
      data[i + 1] = newG; // Nuevo valor verde
      data[i + 2] = newB; // Nuevo valor azul
    }

    // Poner los datos transformados de vuelta en el canvas
    ctx.putImageData(imageData, 0, 0);

    // Convertir el canvas a una URL de datos para mostrar
    const transformedDataURL = canvas.toDataURL();
    setTransformedImage(transformedDataURL);
  };

  // Función para voltear imagen usando transformación lineal (rotación 180°)
  const processFlippedImage = (img) => {
    const canvas = flipCanvasRef.current;
    const ctx = canvas.getContext("2d");

    // Configurar dimensiones
    const containerWidth = 500;
    const containerHeight = 400;
    const aspectRatio = img.width / img.height;
    let drawWidth, drawHeight;

    if (aspectRatio > containerWidth / containerHeight) {
      drawWidth = containerWidth;
      drawHeight = containerWidth / aspectRatio;
    } else {
      drawHeight = containerHeight;
      drawWidth = containerHeight * aspectRatio;
    }

    canvas.width = drawWidth;
    canvas.height = drawHeight;

    // Aplicar transformación lineal de rotación 180°
    // Matriz de transformación: [-1, 0, 0, -1] (reflexión en ambos ejes)
    ctx.save();
    ctx.translate(drawWidth, drawHeight); // Trasladar al centro
    ctx.scale(-1, -1); // Aplicar la transformación lineal de volteo
    ctx.drawImage(img, 0, 0, drawWidth, drawHeight);
    ctx.restore();

    const flippedDataURL = canvas.toDataURL();
    setFlippedImage(flippedDataURL);
  };

  // Función para aplicar transformación sepia
  const processSepiaImage = (img) => {
    const canvas = sepiaCanvasRef.current;
    const ctx = canvas.getContext("2d");

    // Configurar dimensiones
    const containerWidth = 500;
    const containerHeight = 400;
    const aspectRatio = img.width / img.height;
    let drawWidth, drawHeight;

    if (aspectRatio > containerWidth / containerHeight) {
      drawWidth = containerWidth;
      drawHeight = containerWidth / aspectRatio;
    } else {
      drawHeight = containerHeight;
      drawWidth = containerHeight * aspectRatio;
    }

    canvas.width = drawWidth;
    canvas.height = drawHeight;

    // Dibujar imagen original
    ctx.drawImage(img, 0, 0, drawWidth, drawHeight);

    // Obtener y procesar píxeles
    const imageData = ctx.getImageData(0, 0, drawWidth, drawHeight);
    const data = imageData.data;

    // Aplicar transformación lineal sepia a cada píxel
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      const [newR, newG, newB] = applySepiaTransformation(r, g, b);

      data[i] = newR;
      data[i + 1] = newG;
      data[i + 2] = newB;
    }

    ctx.putImageData(imageData, 0, 0);
    const sepiaDataURL = canvas.toDataURL();
    setSepiaImage(sepiaDataURL);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);

        // Crear una imagen para procesar
        const img = new Image();
        img.onload = () => {
          processImageWithLinearTransformation(img);
          processFlippedImage(img);
          processSepiaImage(img);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return {
    selectedImage,
    imagePreview,
    transformedImage,
    flippedImage,
    sepiaImage,
    handleImageUpload,
    canvasRef,
    flipCanvasRef,
    sepiaCanvasRef,
  };
};

export default useImageProcessor;
