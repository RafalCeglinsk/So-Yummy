// styles.js
import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 72px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    margin: 0 100px;
    max-width: 800px;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  width: 40vw;
  background-color: var(--color-bg-footer);
  color: white;
  border: none;
  border-radius: 24px 44px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 768px) {
    width: 20vw;
  }

  @media screen and (min-width: 1440px) {
    width: 10vw;
  }

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
  }

  &:active {
    background-color: #004494;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;
