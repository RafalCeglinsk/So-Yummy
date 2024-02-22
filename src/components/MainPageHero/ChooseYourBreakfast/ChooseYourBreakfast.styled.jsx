import styled from "styled-components";

import BgImg from "../../../images/MainPageHero/ChooseYour1x.png";
import BgImg2x from "../../../images/MainPageHero/ChooseYour2x.png";
import BgTb2x from "../../../images/MainPageHero/Choose-Tb-2x.png";
import BgDSK2x from "../../../images/MainPageHero/Choose-DSK-2x.png"

export const SaladContainer = styled.div`
  position: relative;
  max-width: 100%;
  width: 320px;
  height: 296px;

  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  background-image: -webkit-image-set(url(${BgImg}) 1x, url(${BgImg2x}) 2x);
  @media screen and (min-width: 768px) {
    background-image: -webkit-image-set(url(${BgTb2x}) 2x);
    width: 378px;
    height: 351px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 1280px) {
    background-image: -webkit-image-set(url(${BgDSK2x}) 2x);
    width: 578px;
  height: 539px;
}
`;

export const TextContainer = styled.div`
  background-color: var(--color-bg-modal);
  color: var(--color-text-2);
  font-weight: 500;
  font-size: 12px;
  position: absolute;
  top: 113px;
  right: 7px;
  max-width: 225px;
  border-radius: 8px;
  padding: 10px;

  & span {
    color: var(--color-text-5);
  }

   svg{
stroke: var(--color-text-2);

  }
  @media screen and (min-width: 768px) {
    padding: 12px;
    top: 210px;
    right: 0;
    left: 75px;
    width: 260px;
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    padding: 16px;
    top: 336px;
    left: 335px;
    width: 298px;
  }
`;

export const LinkRecipies = styled.p`
  display: flex;
  justify-content: flex-end;
  color: var(--color-text-2);
  transition: color var(--transition-time) var(--cubic);
  align-items: center;

  &:hover,
  &:focus {
    color: var(--color-text-4);
  }

`;

export const ArrowStyle=styled.div`
    display: none;

@media screen and (min-width: 768px) {
  display: block;
  position: absolute;
  bottom: -70px;
  left: 115px;
  transform: rotate(8deg);

}

@media screen and (min-width: 1280px) {
  bottom: -10px;
  left: 380px;
  transform: rotate(0deg);
}
  
`