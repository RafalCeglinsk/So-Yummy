import React from "react";
import Select from "react-select";
import ImageUploadField from "../ImageUploadField/ImageUploadField";
import {
  FieldContainer,
  Input,
  DisabledInput,
  customSelectStyles,
  SelectContainer,
} from "./styles"; // Dodajemy nowe style

const categoryOptions = [
  { value: "dessert", label: "Dessert" },
  { value: "main_course", label: "Main Course" },
  // Dodaj więcej kategorii
];

const timeOptions = [
  { value: "5", label: "5 min" },
  { value: "10", label: "10 min" },
  // Dodaj więcej opcji czasowych
];

const RecipeDescriptionFields = ({
  recipeData,
  setRecipeData,
  onImageUpload,
}) => {
  const handleChange = (name, value) => {
    setRecipeData({ ...recipeData, [name]: value });
  };

  return (
    <FieldContainer>
      <ImageUploadField onImageUpload={onImageUpload} />
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
          onChange={(option) => handleChange("time", option.value)}
        />
      </SelectContainer>
    </FieldContainer>
  );
};

export default RecipeDescriptionFields;
