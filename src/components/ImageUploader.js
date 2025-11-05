import React from "react";

const ImageUploader = ({ onImageUpload }) => {
  return (
    <div className="upload-section">
      <input
        type="file"
        id="image-upload"
        accept=".png,.jpg,.jpeg"
        onChange={onImageUpload}
        className="file-input"
      />
      <label htmlFor="image-upload" className="upload-button">
        📁 Subir imagen
      </label>
    </div>
  );
};

export default ImageUploader;
