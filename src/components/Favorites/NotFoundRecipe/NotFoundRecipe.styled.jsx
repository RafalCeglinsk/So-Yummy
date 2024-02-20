import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NotFoundRecipeTxt = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  letter-spacing: 0.02em;
  color: #000;
  opacity: 0.5;
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;