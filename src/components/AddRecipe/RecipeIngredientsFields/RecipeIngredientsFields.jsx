import React, { useState, useEffect } from "react";
import Select from "react-select";
import {
  IngredientsContainer,
  IngredientsHeader,
  SizeGroup,
  IngredientInput,
  AddIngredientButton,
  RemoveIngredientButton,
  IngredientField,
  unitSelect,
  ingredientSelect,
  Span,
} from "./styles";

const unitOptions = [
  { value: "tbs", label: "tbs" },
  { value: "tsp", label: "tsp" },
  { value: "kg", label: "kg" },
  { value: "g", label: "g" },
];

const RecipeIngredientsFields = ({ recipeData, setRecipeData }) => {
  const [ingredientOptions, setIngredientOptions] = useState([]);

  useEffect(() => {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    fetch(`${baseUrl}/ingredients/list`)
      .then((response) => response.json())
      .then((data) => {
        const newOptions = data.result.map((ingredient) => ({
          value: ingredient._id,
          label: ingredient.ttl,
        }));
        setIngredientOptions(newOptions);
      })
      .catch((error) => {
        console.error("Error fetching ingredients:", error);
      });
  }, []);

  const addIngredient = () => {
    const newIngredient = { name: "", measure: "" };
    setRecipeData({
      ...recipeData,
      ingredients: [...recipeData.ingredients, newIngredient],
    });
  };

  const removeIngredient = (index) => {
    const newIngredients = recipeData.ingredients.filter((_, i) => i !== index);
    setRecipeData({ ...recipeData, ingredients: newIngredients });
  };

  const handleChange = (index, field, value) => {
    const newIngredients = recipeData.ingredients.map((ingredient, i) => {
      if (i === index) {
        let newMeasure = ingredient.measure;
        if (field === "quantity") {
          newMeasure = `${value} ${ingredient.measure.split(" ")[1]}`;
        } else if (field === "unit") {
          newMeasure = `${ingredient.measure.split(" ")[0]} ${value}`;
        }
        return { ...ingredient, measure: newMeasure, [field]: value };
      }
      return ingredient;
    });
    setRecipeData({ ...recipeData, ingredients: newIngredients });
  };

  const handleSelectNameChange = (index, selectedOption) => {
    handleChange(index, "name", selectedOption.value);
  };

  const handleSelectChange = (index, value) => {
    handleChange(index, "unit", value.value);
  };

  return (
    <IngredientsContainer>
      <IngredientsHeader>
        <h2>Ingredients</h2>
        <AddIngredientButton type="button" onClick={addIngredient}>
          Add ingredients
        </AddIngredientButton>
      </IngredientsHeader>
      {recipeData.ingredients.map((ingredient, index) => (
        <IngredientField key={index}>
          <SizeGroup>
            <Select
              styles={ingredientSelect}
              options={ingredientOptions}
              value={ingredientOptions.find(
                (option) => option.value === ingredient.name
              )}
              onChange={(selectedOption) =>
                handleSelectNameChange(index, selectedOption)
              }
              placeholder="Select..."
            />
            <Span>
              <IngredientInput
                type="text"
                placeholder="0"
                value={ingredient.measure.split(" ")[0]}
                onChange={(e) =>
                  handleChange(index, "quantity", e.target.value)
                }
              />
              <Select
                styles={unitSelect}
                options={unitOptions}
                value={unitOptions.find(
                  (option) => option.value === ingredient.measure.split(" ")[1]
                )}
                onChange={(value) => handleSelectChange(index, value)}
              />
            </Span>
          </SizeGroup>
          <RemoveIngredientButton onClick={() => removeIngredient(index)}>
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0625 4.4375L3.9375 14.5625"
                stroke="#333333"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.0625 14.5625L3.9375 4.4375"
                stroke="#333333"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </RemoveIngredientButton>
        </IngredientField>
      ))}
    </IngredientsContainer>
  );
};

export default RecipeIngredientsFields;
