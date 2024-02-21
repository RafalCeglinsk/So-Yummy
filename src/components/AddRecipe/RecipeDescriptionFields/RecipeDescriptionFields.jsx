import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  getCategoriesThunk,
  addRecipeThunk,
  updateField,
} from "../../../redux/AddRecipe/sliceAddRecipe";

import { CameraIcon } from "../../RenderSvg/RenderSvg";
import {
  FieldContainer,
  Input,
  DisabledInput,
  customSelectStyles,
  SelectContainer,
  ImageUploadContainer,
  ImageUploadButton,
  Form,
} from "./styles";

const timeOptions = [
  { value: "5", label: "5 min" },
  { value: "10", label: "10 min" },
  // Dodaj więcej opcji czasowych
];

const ImageUploadField = ({ onImageUpload }) => {
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      onImageUpload(event.target.files[0]);
    }
  };

  return (
    <ImageUploadContainer>
      <label htmlFor="image-upload" style={{ cursor: "pointer" }}>
        <ImageUploadButton>
          <CameraIcon />
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

const RecipeDescriptionFields = ({ onImageUpload }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.recipes.categories);
  const recipeData = useSelector((state) => state.recipes.recipeData);

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  const handleChange = (name, value) => {
    dispatch(updateField({ name, value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addRecipeThunk(recipeData));
  };

  // Sprawdź, czy recipeData nie jest undefined przed próbą dostępu do jego właściwości
  const titleValue = recipeData ? recipeData.title : "";
  const descriptionValue = recipeData ? recipeData.description : "";
  const selectedCategory = categories.find(
    (option) => option.value === recipeData?.category
  );

  return (
    <FieldContainer>
      <ImageUploadField onImageUpload={onImageUpload} />
      <Form onSubmit={handleFormSubmit}>
        <Input
          id="title"
          type="text"
          name="title"
          placeholder="Enter item title"
          value={titleValue}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <Input
          id="about"
          type="text"
          name="description"
          placeholder="Enter about recipe"
          value={descriptionValue}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <SelectContainer>
          <DisabledInput placeholder="Category" disabled />
          <Select
            id="category"
            styles={customSelectStyles}
            options={categories}
            placeholder="Select..."
            value={selectedCategory}
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
              (option) => option.value === recipeData?.time
            )}
            onChange={(option) => handleChange("time", option.value)}
          />
        </SelectContainer>
      </Form>
    </FieldContainer>
  );
};

export default RecipeDescriptionFields;
