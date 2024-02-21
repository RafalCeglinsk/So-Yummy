import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  margin: 18px;
  text-decoration: underline;
`;
