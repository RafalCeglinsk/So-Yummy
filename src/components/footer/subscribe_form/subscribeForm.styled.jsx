import styled from 'styled-components';

export const SubscribeFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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

  &:hover {
    background-color: #688c26;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;