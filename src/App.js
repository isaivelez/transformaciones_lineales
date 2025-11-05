import "./App.css";
import ImageUploader from "./components/ImageUploader";
import ImageContainer from "./components/ImageContainer";
import TransformationContainer from "./components/TransformationContainer";
import FlippedContainer from "./components/FlippedContainer";
import SepiaContainer from "./components/SepiaContainer";
import useImageProcessor from "./hooks/useImageProcessor";

function App() {
  const {
    imagePreview,
    transformedImage,
    flippedImage,
    sepiaImage,
    handleImageUpload,
    canvasRef,
    flipCanvasRef,
    sepiaCanvasRef,
  } = useImageProcessor();

  return (
    <div className="App">
      <h1>Transformaciones Lineales</h1>
      <p style={{ color: "#666", marginBottom: "30px", fontSize: "1.1rem" }}>
        Aplicación de transformaciones lineales del álgebra lineal para
        procesamiento de imágenes
      </p>

      <ImageUploader onImageUpload={handleImageUpload} />

      {/* Canvas ocultos para procesamiento */}
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <canvas ref={flipCanvasRef} style={{ display: "none" }} />
      <canvas ref={sepiaCanvasRef} style={{ display: "none" }} />

      {/* Primera fila de contenedores */}
      <div className="main-containers">
        <ImageContainer imagePreview={imagePreview} />
        <TransformationContainer transformedImage={transformedImage} />
      </div>

      {/* Segunda fila de contenedores */}
      <div className="main-containers secondary-row">
        <FlippedContainer flippedImage={flippedImage} />
        <SepiaContainer sepiaImage={sepiaImage} />
      </div>
    </div>
  );
}

export default App;
