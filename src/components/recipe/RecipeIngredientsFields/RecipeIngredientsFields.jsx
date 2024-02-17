import React from "react";
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
} from "./styles";

const unitOptions = [
  { value: "tbs", label: "tbs" },
  { value: "tsp", label: "tsp" },
  { value: "kg", label: "kg" },
  { value: "g", label: "g" },
];

const ingredientOptions = [
  { value: "flour", label: "Flour" },
  { value: "sugar", label: "Sugar" },
  { value: "eggs", label: "Eggs" },
  { value: "butter", label: "Butter" },
];

const RecipeIngredientsFields = ({ recipeData, setRecipeData }) => {
  const addIngredient = () => {
    const newIngredient = { name: "", quantity: "", unit: "g" };
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
        return { ...ingredient, [field]: value };
      }
      return ingredient;
    });
    setRecipeData({ ...recipeData, ingredients: newIngredients });
  };

  const handleSelectNameChange = (index, selectedOption) => {
    const newIngredients = recipeData.ingredients.map((ingredient, i) => {
      if (i === index) {
        return { ...ingredient, name: selectedOption.value };
      }
      return ingredient;
    });
    setRecipeData({ ...recipeData, ingredients: newIngredients });
  };

  const handleSelectChange = (index, value) => {
    const newIngredients = recipeData.ingredients.map((ingredient, i) => {
      if (i === index) {
        return { ...ingredient, unit: value.value };
      }
      return ingredient;
    });
    setRecipeData({ ...recipeData, ingredients: newIngredients });
  };

  return (
    <IngredientsContainer>
      <IngredientsHeader>
        <h2>Ingredients</h2>
        <AddIngredientButton onClick={addIngredient}>Add</AddIngredientButton>
      </IngredientsHeader>
      {recipeData.ingredients.map((ingredient, index) => (
        <IngredientField key={index}>
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
          <SizeGroup>
            <IngredientInput
              type="text"
              placeholder="0"
              value={ingredient.quantity}
              onChange={(e) => handleChange(index, "quantity", e.target.value)}
            />
            <Select
              styles={unitSelect}
              options={unitOptions}
              placeholder=""
              value={unitOptions.find(
                (option) => option.value === ingredient.unit
              )}
              onChange={(value) => handleSelectChange(index, value)}
            />
          </SizeGroup>
          <RemoveIngredientButton onClick={() => removeIngredient(index)}>
            X
          </RemoveIngredientButton>
        </IngredientField>
      ))}
    </IngredientsContainer>
  );
};

export default RecipeIngredientsFields;
