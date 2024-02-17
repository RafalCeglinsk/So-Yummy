import styled from 'styled-components';

export const MainWrapper = styled.div`
    
display: flex;
flex-direction: column;
gap:24px;
align-items: center;
`
export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  font-weight: 400;

`;
export const MainTitle = styled.div`
  font-size: 60px;
  color: var(--color-text-6);
  letter-spacing: -0.3px;
    line-height: 1;

  & span {
    color: var(--color-text-5);
  }
`;
export const TextContent = styled.div`
  color: var(--color-text-4);
  text-align: center;
  line-height: 1.2;
  letter-spacing: -0.28px;
  max-width: 248px;
`;
