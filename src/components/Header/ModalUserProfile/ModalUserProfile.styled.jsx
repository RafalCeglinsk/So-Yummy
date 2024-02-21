import styled from "styled-components";
import { ReactComponent as Pencilsvg } from "../SVG/Icon.svg";

export const Pencil = styled(Pencilsvg)`
  position: absolute;
  width: 22px;
  height: 17px;
  top: 15px;
  left: 250px;
  @media screen and (min-width: 768px) {
    top: 20px;
    left: 365px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const IconPlus = styled.button`
  position: absolute;
  left: 55px;
  top: 70px;
  color: white;
  background-color: #8baa36;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    left: 65px;
    top: 85px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const PencilIconstyle = styled.svg`
  width: 18px;
  height: 18px;
`;
export const UserIcon = styled.div`
  position: absolute;
  top: 15px;
  left: 10px;
  @media screen and (min-width: 768px) {
    top: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const UserProfileContainer = styled.div`
  position: relative;
  background-color: #fefefe;
  display: flex;
  width: 330px;
  height: 327px;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  justify-content: space-evenly;
  @media screen and (min-width: 768px) {
    width: 480px;
    height: 402px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
    height: 425px;
  }
`;
export const UserAvatar = styled.div`
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 103px;
    height: 103px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const UserForm = styled.form`
  position: relative;
  display: flex;
  width: 282px;
  height: 48px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const UserInput = styled.input`
  display: flex;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  outline: none;
  width: 282px;
  height: 48px;
  padding-left: 40px;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 58px;
  }

  @media screen and (min-width: 1440px) {
    height: 59px;
  }
`;
export const BtnSave = styled.button`
  display: flex;
  width: 282px;
  height: 49px;
  background-color: #8baa36;
  color: #ffff;
  align-items: center;
  padding: 18px 16px;
  justify-content: center;
  border-radius: 6px;
  line-height: 18px;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 59px;
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
