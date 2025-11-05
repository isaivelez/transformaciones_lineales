import "./App.css";
import ImageUploader from "./components/ImageUploader";
import ImageContainer from "./components/ImageContainer";
import TransformationContainer from "./components/TransformationContainer";
import FlippedContainer from "./components/FlippedContainer";
import SepiaContainer from "./components/SepiaContainer";
import BlurContainer from "./components/BlurContainer";
import SharpenContainer from "./components/SharpenContainer";
import TutorialSection from "./components/TutorialSection";
import useImageProcessor from "./hooks/useImageProcessor";

function App() {
  const {
    imagePreview,
    transformedImage,
    flippedImage,
    sepiaImage,
    blurImage,
    sharpenImage,
    handleImageUpload,
    canvasRef,
    flipCanvasRef,
    sepiaCanvasRef,
    blurCanvasRef,
    sharpenCanvasRef,
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
      <canvas ref={blurCanvasRef} style={{ display: "none" }} />
      <canvas ref={sharpenCanvasRef} style={{ display: "none" }} />

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

      {/* Tercera fila de contenedores */}
      <div className="main-containers secondary-row">
        <BlurContainer blurImage={blurImage} />
        <SharpenContainer sharpenImage={sharpenImage} />
      </div>

      {/* Sección Tutorial */}
      <TutorialSection />
    </div>
  );
}

export default App;
