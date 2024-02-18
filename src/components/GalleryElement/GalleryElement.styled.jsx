import styled from "styled-components";

export const GalleryUl = styled.ul`

`;

export const GalleryLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items:center;
  position: relative;
width: 100%;
max-width: 343px;
  height: 323px;
  cursor: pointer;
`;

export const RecipeImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  transition: transform var(--transition-time) var(--cubic);

  &:hover &,
  &:focus & {
    transform: scale(1.02);
  }
`;

export const RecipeDescription = styled.div`
  position: absolute;
  top: 250px;
  width: 90%;
  border-radius: 8px;
  background-color: var(--color-bg-modal);
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.2;
    color: var(--color-text-3);
    padding: 16px;
  }
`;
