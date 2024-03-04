import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  list-style: none;

  @media (min-width: 768px) {
    gap: 20px;
    width: 151px;
    align-items: flex-start;
  }

    @media (min-width: 1440px) {
    gap: 24px;
    width: 151px;
    align-items: flex-start;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #fafafa;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;
  transition: color var(--transition-time) var(--cubic);

  &:hover {
    color: var(--color-accent-black);
  }
`;
