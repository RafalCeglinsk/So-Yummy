import styled from "styled-components";

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