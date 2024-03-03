import styled from "styled-components";
import {MdClear} from 'react-icons/md'

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



const StyledListContainerIngridient = styled.ul`
   padding: 0;
   @media (min-width: 1280px) {
      padding: 0 40px;
   }
`;

const StyledIngridientsContainer = styled.div`
   width: 100%;
   padding-top: 50px;

   @media (min-width: 768px) {
      padding-top: 72px;
   }
`;
const StyledIngridientsHeader = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px;
   margin-bottom: 32px;
   border-radius: 8px;

   color: var(--text-light);
   font-size: 12px;
   font-style: normal;
   font-weight: 600;
   line-height: 1.5;
   background-color: var(--button-background-primary);

   & div {
      display: flex;
      justify-content: space-between;
   }
   @media (min-width: 768px) {
      font-size: 18px;
      line-height: 1.4;
      margin-bottom: 50px;
      padding: 20px;
   }
   @media (min-width: 1280px) {
      min-width: 1216px;
      max-width: 1280px;
      padding: 21px 40px;
      line-height: normal;
      letter-spacing: 0.54px;
   }
`;
const StyledIngrsHeadThumb = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   min-width: 124px;
   @media (min-width: 768px) {
      min-width: 231px;
   }
   @media (min-width: 1280px) {
      min-width: 294px;
   }
`;
const StyledImageCardThumb = styled.div`
   color: #3e4462;
   font-size: 10px;
   font-style: normal;
   font-weight: 500;
   line-height: 1.2;
   display: flex;
   justify-content: space-between;
   @media (min-width: 768px) {
      font-size: 16px;
      line-height: 1.5;
   }
   @media (min-width: 1280px) {
      line-height: 1.5;
   }
   & p {
      color: var(--text-primary);
   }
`;
const StyledImage = styled.img`
   height: 60px;
   background-color: #ebf3d4;
   border-radius: 8px;
   margin-right: 16px;
   @media (min-width: 768px) {
      height: 81px;
   }
`;

const StyledQuantity = styled.div`
   display: flex;
   padding-left: 2px;
   padding-right: 2px;
   justify-content: center;
   align-items: center;
   min-width: 37px;
   height: 23px;
   margin-bottom: 4px;
   color: #fafafa;
   font-size: 10px;
   font-style: normal;
   font-weight: 600;
   line-height: normal;
   background-color: #8baa36;
   border-radius: 8px;
   @media (min-width: 768px) {
      min-width: 68px;
      height: 35px;
      font-size: 18px;
   }
`;
const StyledFlexQuantity = styled.div`
   display: flex;
   justify-content: space-between;
   min-width: 109px;
   @media (min-width: 768px) {
      min-width: 198px;
   }
   @media (min-width: 1280px) {
      min-width: 262px;
   }
`;

const StyledIngridientsItem = styled.li`
   display: flex;
   justify-content: space-between;
   height: 84px;
   padding-right: 19px;
   margin-bottom: 24px;
   border-bottom: 1px solid #e0e0e0;
   @media (min-width: 768px) {
      padding-right: 45px;
      margin-bottom: 44px;
      height: 140px;
   }
   @media (min-width: 1280px) {
      padding-right: 28px;
   }
`;


const StyledFlexRow = styled.div`
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
`;

const StyledCloseIcon = styled(MdClear)`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   cursor: pointer;
   padding: 3px;
   color: var(--text-primary);

   transition: color 250ms var(--cubic-bezier), background-color 250ms var(--cubic-bezier);

   &:hover {
      color: var(--background-primary);
      background-color: rgb(139, 170, 54);
   }
`;

export {
   StyledFlexRow,
   StyledIngridientsHeader,
   StyledIngridientsItem,
   StyledIngrsHeadThumb,
   StyledIngridientsContainer,
   StyledImageCardThumb,
   StyledImage,
   StyledQuantity,
   StyledFlexQuantity,
   StyledListContainerIngridient,
   EmptyStyled, PictrueContainerStyled,
   StyledCloseIcon
};


