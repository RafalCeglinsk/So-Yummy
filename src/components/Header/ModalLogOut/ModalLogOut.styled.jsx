import styled from "styled-components";
import { ReactComponent as IconX } from "../SVG/X.svg";

export const IconClose = styled(IconX)`
  width: 20px;
  height: 20px;
`;
export const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
`;
export const LogOutContainer = styled.div`
  position: relative;
  background-color: #fefefe;
  display: flex;
  width: 330px;
  height: 179px;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  justify-content: space-evenly;
  @media screen and (min-width: 768px) {
    width: 480px;
    height: 215px;
  }
  @media screen and (min-width: 1440px) {
    width: 500px;
    height: 215px;
  }
`;
export const LogOutText = styled.p`
  line-height: 18px;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    line-height: 24px;
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const BtnLogOut = styled.button`
  display: flex;
  width: 137px;
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
    width: 180px;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const BtnCancel = styled.button`
  display: flex;
  width: 137px;
  height: 49px;
  background-color: #d9d9d9;
  align-items: center;
  padding: 18px 16px;
  justify-content: center;
  border-radius: 6px;
  line-height: 18px;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    width: 180px;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const BtnClose = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background-color: #ffff;
`;
export const BtnContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
