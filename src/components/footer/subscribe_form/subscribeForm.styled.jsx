import styled from 'styled-components';

export const SubscribeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1440px) {
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  position: relative;
  top: 250px;
  left: -350px;
  }
  @media screen and (max-width: 768px){
    position:relative;
    top:-100px;
    left: 10px;
    display: flex;
    flex-direction: column;
  }
`;

export const EmailInput = styled.input`
  padding: 10px;
  margin-top: 28px;
  margin-bottom: 16px;
  border: 1px solid rgba(250, 250, 250, 0.5);
  border-radius: 5px;
  width: 339px;
  color: #FAFAFA;
  background-color:#22252A;
  font-weight: 400;
  font-size: 18px;
  @media screen and (max-width: 1440px) {
  width: 259px;
  height: 50px;
  }
  @media screen and (max-width: 768px) {
    height: 38px;
    width: 204px;
  }
`;

export const SubscribeButton = styled.button`
  padding: 10px;
  background-color: #8BAA36;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 363px;
  transition: background-color 0.3s ease;
  @media screen and (max-width: 1440px) {
    height: 70px;
    position: relative;
    top: 5px;
  }
  @media screen and (max-width: 768px) {
    height: 60px;
    width: 225px;
  }
  &:hover {
    background-color: #688c26;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;