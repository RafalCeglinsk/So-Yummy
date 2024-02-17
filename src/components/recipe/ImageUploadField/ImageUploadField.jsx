import React from "react";
import { ImageUploadContainer, ImageUploadButton } from "./styles";
import { RenderFacebook } from "../../RenderSvg/RenderSvg";

const ImageUploadField = ({ onImageUpload }) => {
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      // Przesyłasz obraz do stanu nadrzędnego komponentu lub bezpośrednio do backendu
      onImageUpload(event.target.files[0]);
    }
  };

  return (
    <ImageUploadContainer>
      <ImageUploadButton>
        <svg width="64" height="64" viewBox="0 0 64 64">
          <RenderFacebook />
        </svg>
      </ImageUploadButton>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }} // Ukrywamy pole input, ale pozwalamy na kliknięcie poprzez przycisk
      />
    </ImageUploadContainer>
  );
};

export default ImageUploadField;
