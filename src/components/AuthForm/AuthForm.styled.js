import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;

  background-color: var(--color-bg-start);
  padding: 32px 28px 40px;
`;

export const H2 = styled.h2`
  color: var(--color-default-1);
  padding-bottom: 18px;
`;

export const StyledLabel = styled.label`
  padding-bottom: 12px;
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: 1px solid var(--color-default-1);
  opacity: 0.8;
  border-radius: 6px;
  padding: 12px;
  width: 70vw;

  &::placeholder {
    color: var(--color-default-1);
    opacity: 0.8;
  }
`;

export const StyledSpan = styled.span`
  color: var(--color-default-1);
  padding-right: 10px;
`;

export const FormButton = styled.button`
  padding: 12px;
  font-size: 16px;
  background-color: var(--color-text-5);
  color: var(--color-default-1);
  border-radius: 6px;
`;

export const StyledLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  margin: 18px;
  text-decoration: underline;
`;
