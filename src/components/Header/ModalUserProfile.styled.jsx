import styled from "styled-components";

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
`;
export const UserAvatar = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;
export const UserForm = styled.form`
  display: flex;
  width: 282px;
  height: 48px;
`;
export const UserInput = styled.input`
  font-size: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  outline: none;
  width: 282px;
  height: 48px;
  padding-left: 10px;
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
`;
