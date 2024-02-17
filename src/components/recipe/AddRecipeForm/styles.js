// styles.js
import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 72px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  width: 40%;
  background-color: #22252a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

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
