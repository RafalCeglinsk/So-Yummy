import styled from 'styled-components';

 import BgImg from "../../../images/MainPageHero/ChooseYour1x.png"
import BgImg2x from '../../../images/MainPageHero/ChooseYour2x.png'


export const SaladContainer = styled.div`

   position: relative;
    max-width: 100%;
    width: 320px;
  height: 296px;

    position: relative;
    background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* background-image: url(${BgImg}); */
  background-image: -webkit-image-set(
    url(${BgImg}) 1x,
    url(${BgImg2x}) 2x
  );
 
`

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
`;


export const LinkRecipies = styled.a`
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

