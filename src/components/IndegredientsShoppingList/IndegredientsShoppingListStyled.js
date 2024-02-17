import styled from "styled-components";

const EmptyStyled = styled.p `
   color: var(--color-default-2);
   font-size: 14px;
   font-weight: 500;
   line-height: 10px;
   letter-spacing: -0.2px;
   margin-top: 24px;

   @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 18px;
      letter-spacing: -0.28px;
   }

   @media screen and (min-width: 1280px) {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.36px;
   }
`

const PictrueContainerStyled = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 0 auto;
   margin-bottom: 50px;
`;

export {EmptyStyled, PictrueContainerStyled}
