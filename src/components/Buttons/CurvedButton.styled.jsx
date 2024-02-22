import styled from "styled-components";

export const ButtonColor = styled.button`
  background-color: var(--color-icons-3);
  color: var(--color-text-7);
  border-radius: 15px 35px;
  border: 1px;
  outline: none;
  cursor: pointer;
  padding: 12px 24px;
  color: var(--color-default-1);
  margin-right: 12px;

  &:hover,
  &:focus {
    background-color: var(--color-icons-1);
  }
`;

export const ButtonTransparent = styled.button`
  background-color: transparent;
  color: var(--color-text-7);
  border-radius: 15px 35px;
  border: solid var(--color-default-1) 1px;
  outline: none;
  cursor: pointer;
  padding: 12px 24px;
  color: var(--color-default-1);

  &:hover,
  &:focus {
    background-color: var(--color-icons-3);
    border: solid transparent 1px;
  }
`;

export const CurvedMain = styled.button`
   background-color: transparent;
   border-radius: 15px 35px;
   border: solid var(    --color-icons-3) 1px;
   padding: 14px 32px;
   &:hover,
  &:focus {
    background-color: var(--color-icons-3);
    color: var(--color-default-1);
  }
`