import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ScrollContainer = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #e0e0e0;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
`;

export const ScrollItem = styled(NavLink)`
  flex: 0 0 auto;
  padding: 10px 55px;
  text-align: center;
  color: #bdbdbd;

  &.active {
    color: var(--color-text-5);
  }
`;
