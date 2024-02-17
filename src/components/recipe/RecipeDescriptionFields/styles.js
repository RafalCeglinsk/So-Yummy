import styled from "styled-components";

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 44px;
`;

export const Input = styled.input`
  padding-bottom: 8px;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  padding-bottom: 18px;
  padding-top: 24px;

  font-family: "Poppins", -apple-system, BlinkMacSystemFont, sans-serif;

  &:focus {
    outline: none;
  }

  &::placeholder {
    opacity: 50%;
  }
`;

export const Textarea = styled.textarea`
  border: 1px solid #ccc;
  font-size: 16px;
  border-top: none;
  border-left: none;
  border-right: none;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, sans-serif;
`;

export const DisabledInput = styled.input`
  flex: 1;
  font-size: 16px;
  background-color: white;
  border: none;
  padding-bottom: 18px;
  padding-top: 24px;
  color: var(--color-default-2);

  font-family: "Poppins", -apple-system, BlinkMacSystemFont, sans-serif;

  &::placeholder {
    opacity: 50%;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
`;

export const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "none",
    fontSize: "16px",
    boxShadow: state.isFocused ? "none" : provided.boxShadow,
    "&:hover": { borderColor: "#aaa" }, // zmiana koloru ramki przy najechaniu
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? "#007bff" : "white",
    fontSize: "12px",
    opacity: 0.5,
    "&:hover": {
      backgroundColor: "#007bff",
      color: "white",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#ccc",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "black",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#ccc",
    "&:hover": {
      color: "black",
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: "#ccc",
    "&:hover": {
      color: "black",
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
