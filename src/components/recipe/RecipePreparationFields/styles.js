import styled from "styled-components";

export const PreparationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PreparationTitle = styled.h3`
  color: #333;
  margin-bottom: 15px;
`;

export const PreparationTextarea = styled.textarea`
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  height: 150px;
  resize: vertical;
  margin-bottom: 20px;
  background-color: var(--color-bg-input);
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, sans-serif;

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    max-width: 70vw;
  }
`;
