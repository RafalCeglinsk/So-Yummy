import React from "react";
import Select from "react-select";

// Zakładam, że RenderSvg to komponent zwracający poprawny kod SVG.
import { RenderFacebook } from "../../RenderSvg/RenderSvg";

import {
  FieldContainer,
  Input,
  DisabledInput,
  customSelectStyles,
  SelectContainer,
  ImageUploadContainer,
  ImageUploadButton,
  Form,
} from "./styles"; // Upewnij się, że wszystkie potrzebne style są zaimportowane

// Opcje dla kategorii przepisu
const categoryOptions = [
  { value: "dessert", label: "Dessert" },
  { value: "main_course", label: "Main Course" },
  // Dodaj więcej kategorii zgodnie z potrzebami
];

// Opcje dla czasu gotowania
const timeOptions = [
  { value: "5", label: "5 min" },
  { value: "10", label: "10 min" },
  // Dodaj więcej opcji czasowych
];

const ImageUploadField = ({ onImageUpload }) => {
  // Funkcja obsługująca zmianę obrazu
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      onImageUpload(event.target.files[0]);
    }
  };

  return (
    <ImageUploadContainer>
      <label htmlFor="image-upload" style={{ cursor: "pointer" }}>
        <ImageUploadButton>
          {/* Tutaj bezpośrednio używamy SVG lub inny element, który wskazuje na akcję uploadu */}
          <RenderFacebook />
        </ImageUploadButton>
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </ImageUploadContainer>
  );
};

const RecipeDescriptionFields = ({
  recipeData,
  setRecipeData,
  onImageUpload,
}) => {
  // Funkcja obsługująca zmianę danych przepisu
  const handleChange = (name, value) => {
    setRecipeData({ ...recipeData, [name]: value });
  };

  return (
    <FieldContainer>
      <ImageUploadField onImageUpload={onImageUpload} />
      <Form>
        <Input
          id="title"
          type="text"
          name="title"
          placeholder="Enter item title"
          value={recipeData.title}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <Input
          id="about"
          type="text"
          name="description"
          placeholder="Enter about recipe"
          value={recipeData.description}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <SelectContainer>
          <DisabledInput placeholder="Category" disabled />
          <Select
            id="category"
            styles={customSelectStyles}
            options={categoryOptions}
            placeholder="Select..."
            value={categoryOptions.find(
              (option) => option.value === recipeData.category
            )}
            onChange={(option) => handleChange("category", option.value)}
          />
        </SelectContainer>
        <SelectContainer>
          <DisabledInput placeholder="Cooking time" disabled />
          <Select
            id="time"
            styles={customSelectStyles}
            options={timeOptions}
            placeholder="Select..."
            value={timeOptions.find(
              (option) => option.value === recipeData.time
            )}
            onChange={(option) => handleChange("time", option.value)}
          />
        </SelectContainer>
      </Form>
    </FieldContainer>
  );
};

export default RecipeDescriptionFields;
