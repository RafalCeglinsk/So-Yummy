import styled from "styled-components";

export const GalleryUl = styled.ul`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1280px) {
    gap: 14px;
  }
`;

export const GalleryLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 343px;
  height: 323px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    max-width: 336px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 300px;
  }
`;

export const RecipeImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  transition: transform var(--transition-time) var(--cubic);

&:hover,
  &:focus  {
    transform: scale(1.01);
  }
`;

export const RecipeDescription = styled.div`
  position: absolute;
  top: 250px;
  width: 90%;
  border-radius: 8px;
  background-color: var(--color-bg-modal);
  transition: transform var(--transition-time) var(--cubic);

  &:hover,
  &:focus  {
    transform: scale(1.01);
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.2;
    color: var(--color-text-3);
    padding: 16px;
    letter-spacing: -0.24px;
  }
`;

export const MainGalleryH2 = styled.h2`
  /* padding-right: 200px; */

position: absolute;
top: -200px;
`