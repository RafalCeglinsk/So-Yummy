import React from 'react';
import { ImageUploadContainer, ImageUploadButton } from './styles';

const ImageUploadField = ({ onImageUpload }) => {
  const handleImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      // Przesyłasz obraz do stanu nadrzędnego komponentu lub bezpośrednio do backendu
      onImageUpload(event.target.files[0]);
    }
  };

  return (
    <ImageUploadContainer>
      <ImageUploadButton>
        <svg width="50" height="50" viewBox="0 0 50 50">
          {/* SVG content goes here */}
        </svg>
      </ImageUploadButton>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }} // Ukrywamy pole input, ale pozwalamy na kliknięcie poprzez przycisk
      />
    </ImageUploadContainer>
  );
};

export default ImageUploadField;
