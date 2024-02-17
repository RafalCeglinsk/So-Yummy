import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  
  a {
    margin-bottom: 10px;
    text-decoration: none;
    color: #FAFAFA;
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 24px;

    &:hover {
      color: #00bcd4;
    }
  }
`;