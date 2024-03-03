import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding-bottom:0px;
    position: relative;
    top: 92px; 
  }

  
  a {
    margin-bottom: 10px;
    text-decoration: none;
    color: #FAFAFA;
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 24px;

    &:hover {
      color: #8BAA36;
      transform: scale(1.5);
    }
  }
`;