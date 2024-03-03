import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { updateField } from "../../../redux/recipes/AddRecipe/addRecipeSlice";
import { getCategoriesThunk } from "../../../redux/recipes/AddRecipe/operations";
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
  { value: "15", label: "15 min" },
  { value: "20", label: "20 min" },
  { value: "25", label: "25 min" },
  { value: "30", label: "30 min" },
  { value: "35", label: "35 min" },
  { value: "40", label: "40 min" },
  { value: "45", label: "45 min" },
  { value: "50", label: "50 min" },
  { value: "55", label: "55 min" },
  { value: "60", label: "60 min" },
  { value: "65", label: "65 min" },
  { value: "70", label: "70 min" },
  { value: "75", label: "75 min" },
  { value: "80", label: "80 min" },
];

const ImageUploadField = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      console.log(file);
      dispatch(updateField({ name: "recipeImg", value: file }));
    }
  };

  const handleContainerClick = () => {
    fileInputRef.current.click();
  };

  return (
    <ImageUploadContainer onClick={handleContainerClick}>
      <label htmlFor="image-upload" style={{ cursor: "pointer" }}>
        <ImageUploadButton type="button">
          <CameraIcon />
        </ImageUploadButton>
      </label>
      <input
        ref={fileInputRef}
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        name="recipeImg"
      />
    </ImageUploadContainer>
  );
};

const RecipeDescriptionFields = ({ recipeData, setRecipeData }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.recipes.categories);

  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, [dispatch]);

  const handleImageUpload = (file) => {
    console.log(file);
    dispatch(updateField({ name: "recipeImg", value: file }));
  };

  const handleChange = (name, value) => {
    setRecipeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", recipeData.title);
    formData.append("description", recipeData.description);
    // Dodaj plik obrazu
    const imageInput = document.getElementById("image-upload");
    if (imageInput.files[0]) {
      formData.append("recipeImg", imageInput.files[0]);
    }

    // Przykład przesyłania danych formularza, w tym pliku, do serwera
    try {
      const response = await fetch("http://localhost:5001/api/ownRecipes", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Obsługa sukcesu, np. wyświetlenie komunikatu lub przekierowanie
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  const titleValue = recipeData ? recipeData.title : "";
  const descriptionValue = recipeData ? recipeData.description : "";
  const selectedCategory = categories.find(
    (option) => option.value === recipeData?.category
  );

  return (
    <FieldContainer>
      <ImageUploadField type="button" onImageUpload={handleImageUpload} />
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

export { RecipeDescriptionFields, ImageUploadField };
