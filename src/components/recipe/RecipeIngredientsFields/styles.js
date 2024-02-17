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
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    gap: 100px;
  }
`;

export const Span = styled.div`
  display: flex;
  flex-direction: row;
`;

export const IngredientField = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
  /* max-width: 800px; */
  width: 100%;
`;

export const IngredientInput = styled.input`
  padding: 10px;
  margin-right: 0px;
  border: none;
  border-radius: 4px 0 0 4px;
  width: 10vw;
  background-color: #d9d9d9;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

export const AddIngredientButton = styled.button`
  background-color: var(--color-text-5);
  color: white;
  padding: 10px 15px;
  height: 50%;
  width: 40vw;
  border: none;
  border-radius: 24px 44px;
  cursor: pointer;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 20vw;
  }

  @media screen and (min-width: 1440px) {
    width: 10vw;
  }

  &:hover {
    background-color: #45a049;
  }
  &:focus {
    background-color: var(--color-text-5);
  }
`;

export const RemoveIngredientButton = styled.button`
  color: black;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  justify-self: right;
`;

export const unitSelect = {
  control: (provided, state) => ({
    ...provided,
    padding: "0",
    width: "20vw",
    border: state.isFocused ? "none" : "1px solid transparent",
    backgroundColor: "#D9D9D9",
    borderRadius: "0 4px 4px 0",
    fontSize: " 16px",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #aaa",
    },
    "@media screen and (min-width: 768px)": {
      width: "100%",
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
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused ? "0px solid white" : "none",
    width: "40vw",
    fontSize: " 16px",
    boxShadow: state.isFocused ? "none" : provided.boxShadow,
    "&:hover": {
      border: "1px solid #aaa",
    },
    "@media screen and (min-width: 768px)": {
      width: "150%",
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
