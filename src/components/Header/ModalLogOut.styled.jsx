import styled from "styled-components";

export const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Cień */
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
`;
export const LogOutText = styled.p`
  line-height: 18px;
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
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
