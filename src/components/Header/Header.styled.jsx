import styled from "styled-components";
import modalimg from "../Header/modalimg.png";

export const HeaderModalWraper = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  text-decoration: none;
`;
export const NavLinks = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: 18;
  &:hover {
    color: #8baa36;
  }
  &:focus {
    color: #8baa36;
  }
`;
export const ModalHeader = styled.div`
  padding: 16px 18px;
  display: flex;
  justify-content: space-between;
`;
export const MainModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ebf3d4;
  background-image: url(${modalimg});
  background-size: cover;
  background-position: center;
`;
export const Logo = styled.div`
  padding: 0;
  background: none;
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;
export const Photo = styled.div`
  border-radius: 50%;
  width: 34px;
  height: 34px;
  background-color: grey;
`;
export const UserName = styled.p`
  display: flex;
  align-items: center;
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
`;
export const ModalProfileEdit = styled.div`
  display: flex;
  gap: 37px;
`;
export const ProfileEdit = styled.div`
  display: flex;
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
`;
export const StyleSvg = styled.a`
  padding: 3px;
`;
