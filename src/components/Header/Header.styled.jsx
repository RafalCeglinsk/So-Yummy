import styled from "styled-components";
import modalimg from "./SVG/modalimg.png";
import MobileLeaf from "./SVG/MobileLeaf.png";
import { NavLink } from "react-router-dom";
import { ReactComponent as Pencil } from "./SVG/Icon.svg";
import { RenderIcon } from "./HeaderRenderSvg";
import { SearchLens } from "../RenderSvg/RenderSvg";
import FetchAvatar from "./helpers/Avatar";

export const Leaf = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: auto;
  height: auto;
  min-width: 360px;
  background-image: url(${MobileLeaf});
  min-height: 360px;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: url(${modalimg});
    min-width: 550px;
    min-height: 550px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const Loop = styled(SearchLens)`
  stroke: #22252a;
  &:hover {
    stroke: #8baa36;
  }
  &:focus {
    stroke: #8baa36;
  }
`;

export const LogoIcon = styled(RenderIcon)`
  width: 40px;
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const Pencilsvg = styled(Pencil)`
  width: 17px;
  height: 17px;
`;
export const HeaderContainer = styled.div`
  z-index: 9;
  padding: 18px 16px;

  @media screen and (min-width: 768px) {
    padding: 18px 32px;
    position: fixed;
    width: -webkit-fill-available;
  }

  @media screen and (min-width: 1440px) {
    justify-content: space-between;
    flex-direction: column;
    display: flex;
    padding: 18px 100px;
  }
`;
export const HeaderModalWraper = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  text-decoration: none;
`;
export const NavLinks = styled(NavLink)`
  stroke: #23262a;
  color: #23262a;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  display: flex;
  font-weight: 500;
  gap: 8px;
  align-items: center;
  &:hover {
    color: #8baa36;
    stroke: #8baa36;
  }
  &:focus {
    color: #8baa36;
    stroke: #8baa36;
  }
  @media screen and (min-width: 768px) {
    line-height: 24px;
    font-size: 24px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 22px;
    font-size: 14px;
  }
`;
export const ModalHeader = styled.div`
  padding: 16px 18px;
  display: flex;
  justify-content: space-between;
`;
export const MainModal = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ebf3d4;
  /* background-image: 
  background-size: cover;
  background-position: center; */
`;
export const Logo = styled(NavLink)`
  background-color: transparent;
  padding: 0;
  background: none;
  width: 40px;
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
  @media screen and (min-width: 1440px) {
    width: 44px;
    height: 44px;
  }
`;
export const LogoBurger = styled.div`
  background-color: transparent;
  padding: 0;
  background: none;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;
export const Photo = styled.div`
  background-image: url(${FetchAvatar});
  background-size: 34px 34px;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  background-color: grey;
  @media screen and (min-width: 768px) {
    background-size: 44px 44px;
    width: 44px;
    height: 44px;
  }

  @media screen and (min-width: 1440px) {
    width: 44px;
    height: 44px;
  }
`;
export const UserName = styled.p`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 170%;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 14px;
`;
export const WraperContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding-top: 106px;
`;
export const ModalCloseBtn = styled.button`
  background: none;
`;
export const ModalProfile = styled.div`
  background-color: #ffff;
  display: flex;
  width: 161px;
  height: 130px;
  border: 1px solid;
  border-radius: 7%;
  border-color: #8baa36;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 72px;
  right: 86px;
  @media screen and (min-width: 768px) {
    width: 171px;
    height: 134px;
  }

  @media screen and (min-width: 1440px) {
    width: 177px;
    height: 134px;
  }
`;
export const ModalProfileEdit = styled.div`
  display: flex;
  gap: 37px;
`;
export const ProfileEdit = styled.div`
  display: flex;
  line-height: 22.4px;
  font-size: 14px;
  font-weight: 700;
`;
export const LogOutBtn = styled.button`
  display: flex;
  background-color: #8baa36;
  width: 125px;
  height: 43px;
  border-radius: 15px 35px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    width: 141px;
    height: 43px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const StyleSvg = styled.a`
  padding: 3px;
`;
export const Nav = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 30px;
  }
`;
