import styled from 'styled-components';

export const SubscribeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding-bottom: 100px;
    padding-top: 0px;
  }
  @media screen and (min-width: 768px) and (max-width: 1439px) {
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  position: relative;
  top: 292px;
  left: 10px;

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
  @media screen and (min-width: 768px) and (max-width: 1439px) {
  width: 259px;
  height: 50px;
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
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 65px;
  }
  &:hover {
    background-color: #688c26;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;