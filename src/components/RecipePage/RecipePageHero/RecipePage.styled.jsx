import styled from "styled-components";
import backgroundImg from "#images/RecipePage/mobileBG.svg";
import tabletBG from "#images/RecipePage/tabletBG.svg";
import desktopBG from "#images/RecipePage/desktopBG.svg";

export const BackgroundSection = styled.section`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    background-image: url(${tabletBG});
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${desktopBG});
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 38px 0px 38px;
  @media screen and (min-width: 768px) {
    padding: 72px 131.5px 24px 131.5px;
  }
  @media screen and (min-width: 1440px) {
    padding: 100px 392px 30px 392px;
  }
`;

export const Header = styled.h1`
  padding: 0px 13.5px 18px 13.5px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-align: left;
  color: var(--color-text-5);
  @media screen and (min-width: 768px) {
    font-size: 44px;
    line-height: 1;
  }
  @media screen and (min-width: 1440px) {
    text-align: center;
  }
`;

export const RecipeDesc = styled.div`
  color: var(--color-text-6);
  padding: 0px 2px 0px 2px;
  text-align: center;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.02em;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
export const Button = styled.button`
  margin: 24px 0px 42px 0px;
  background-color: transparent;
  border-radius: 15px 35px;
  padding: 10px 18px;
  width: 150px;
  height: 35px;
  border: solid var(--color-icons-3) 1px;
  outline: none;
  cursor: pointer;
  color: var(--color-icons-1);
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 18px 44px;
  }

  & > span {
    color: var(--color-icons-1);
    font-size: 12px;
    text-align: left;
    white-space: nowrap;
    @media screen and(min-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 90px;
`;
export const TimerP = styled.p`
  margin-left: 8px;
  color: var(--color-text-6);
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.02em;
  text-align: center;
  padding: 0px 2px 0px 2px;
`;
