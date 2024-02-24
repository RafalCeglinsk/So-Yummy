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
    fetch("http://localhost:5001/api/ingredients/list")
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
    const newIngredient = { name: "", measure: "" }; // Zaktualizowano
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
        if (field === "quantity" || field === "unit") {
          // Zaktualizowano logikę dla quantity i unit, aby aktualizować measure
          const newMeasure =
            field === "quantity"
              ? `${value} ${ingredient.measure.split(" ")[1]}`
              : `${ingredient.measure.split(" ")[0]} ${value}`;
          return { ...ingredient, measure: newMeasure };
        } else {
          return { ...ingredient, [field]: value };
        }
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
            {/* Ikona usuwania */}
          </RemoveIngredientButton>
        </IngredientField>
      ))}
    </IngredientsContainer>
  );
};

export default RecipeIngredientsFields;
