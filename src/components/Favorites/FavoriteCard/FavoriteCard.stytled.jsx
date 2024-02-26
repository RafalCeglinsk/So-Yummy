import styled from "styled-components";

export const FavoriteCardStyle = styled.div`
  background-color: #bbb7b719;
  max-width: 343px;
  width: 100%;
  border-radius: 8px;
  padding: 10px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 20px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1240px;
    padding: 40px;
  }
`;

export const FavoriteCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;

export const FavoriteCardThumb = styled.div`
  display: flex;

  max-width: 200px;
  @media screen and (min-width: 768px) {
    max-width: 312px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const FavoriteCardImage = styled.img`
  border-radius: 8px;
`;

export const FavoriteCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  @media screen and (min-width: 768px) {
    gap: 36px;
  }
  @media screen and (min-width: 1440px) {
    gap: 50px;
  }
`;

export const FavoriteCardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const FavoriteCardDesc = styled.p`
  font-size: 10px;
  font-weight: 400px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const FavoriteCardTime = styled.p`
  font-size: 10px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.24px;
  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;

export const FavoriteCardRemoveButton = styled.button`

  svg {

padding:5px;
    @media screen and (min-width: 768px) {
        width: 18px;
    height: 20px;

    }
}
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  align-items: center;
  justify-content: space-between;
`;
