import styled from "styled-components";

 export const Form =styled.form`
  max-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`

const SearchBarStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 295px;
  
  position: relative;
  @media screen and (min-width: 768px) {
    max-width: 368px;
 
  }
  @media screen and (min-width: 1440px) {
    max-width: 510px;
  }
  input {
    padding: 16px 113px 16px 32px;
width: 100%;
position: relative;
    font-size: 12px;
    line-height: 21px;
    border: none;
    outline: none;
    border-radius: 15px 35px;
    background-color: var(--color-bg-modal);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    color: var(--color-text-3);
    transition: background-color var(--transition-time) var(--cubic);
    &:hover{
   
        transform: translateX(-2px);
    }
    &::placeholder {
      color: #bdbdbd;
    }
  }
  button {
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: var(--color-icons-1);
    color: var(--color-text-7);
    border-radius: 15px 35px;
    border: 1px;
    outline: none;
    cursor: pointer;
    height: 100%;
    width: 30%;
    &:hover,
  &:focus {
    background-color: var(--color-icons-3);
  }
  }
`;

export default SearchBarStyled;


export const Label = styled.label`
padding: 35px 0px ;
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  font-weight: 500;

`;

export const SearchSpan = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-right: 8px;
`;

export const SelectStyle = styled.div`
  font-size: 16px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

 
`;
export const customSelectStyles = {
  menuList: (provided) => ({
    ...provided,
    maxHeight: "185px",
    maxWidth: "310px",
  }),
  control: (provided, state) => ({
    ...provided,
    border: "none",
    fontSize: "16px",
    boxShadow: state.isFocused ? "none" : provided.boxShadow,
    "&:hover": { borderColor: "#aaa" },

    "@media screen and (min-width: 768px)": {
      maxWidth: "310px",
    },
    "@media screen and (min-width: 1440px)": {
      minWidth: "10vw",
      maxWidth: "310px",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
    backgroundColor: state.isSelected ? "#007bffdf" : "white",
    fontSize: "12px",
    opacity: 0.5,
    "&:hover": {
      backgroundColor: "#007bff78",
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
    color: "#716767",
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
  })

};


export const Option = styled.option`

  padding: 8px 16px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    background: #fafafa;
  }
`;