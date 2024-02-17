import styled from "styled-components";

export const IngredientsContainer = styled.div`
  margin-bottom: 44px;
`;

export const IngredientsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const SizeGroup = styled.div`
  display: flex;
  justify-content: center;
`;

export const IngredientField = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
`;

export const IngredientInput = styled.input`
  padding: 10px;
  margin-right: 0px;
  border: none;
  border-radius: 4px 0 0 4px;
  width: 40px;
  background-color: #d9d9d9;
  font-size: 16px;
`;

export const AddIngredientButton = styled.button`
  background-color: var(--color-text-5);
  color: white;
  padding: 10px 15px;
  height: 50%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: center;

  &:hover {
    background-color: #45a049;
  }
`;

export const RemoveIngredientButton = styled.button`
  color: black;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

export const unitSelect = {
  control: (provided) => ({
    ...provided,
    padding: "0",
    width: "80px",
    border: "none",
    boxShadow: "none",
    backgroundColor: "#D9D9D9",
    borderRadius: "0 4px 4px 0",
    fontSize: " 16px",
    "&:hover": {
      border: "1px solid #aaa",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    svg: {
      fill: "var(--color-text-5)",
    },
  }),
};

export const ingredientSelect = {
  control: (provided) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    width: "150px",
    fontSize: " 16px",
    "&:hover": {
      border: "1px solid #aaa",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    svg: {
      fill: "var(--color-text-5)",
    },
  }),
};
