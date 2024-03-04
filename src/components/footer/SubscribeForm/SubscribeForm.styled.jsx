import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color:var(--color-default-1);

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    width: 338px;
    gap: 0;
  }

 
`;

export const Input = styled.input`
  box-sizing: border-box;
  color:var(--color-default-1);
  padding: 9px 9px 9px 42px;
  background: transparent;
  border-radius: 6px;
  border: 1px solid #fafafa;
  outline: none;
  font-size: 10px;
  line-height: 18px;
  letter-spacing: -0.2px;
  opacity: 0.5;
  transition: opacity var(--transition-time) var(--cubic);
  &:hover,
  &:focus {
    opacity: 1;
  }

  @media (min-width: 768px) {
    width: 259px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.28px;
    padding: 15px 15px 15px 51px;
  }

  @media (min-width: 1440px) {
    width: 339px;
    margin-bottom: 16px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.36px;
    padding: 17px 17px 17px 52px;
  }
`;

export const Button = styled.button`
  background-color: var(--color-icons-3);
  color: #fafafa;
  font-size: 14px;
  line-height: 16px;
  border: none;
  border-radius: 6px;
  padding: 11px 67px;
  cursor: pointer;
  transition: color var(--transition-time) var(--cubic);

  &:hover {
    color:var(--color-default-2);
  }

  @media (min-width: 768px) {
    padding: 16px 50px;
    font-size: 16px;
    line-height: 18px;
  }

  @media (min-width: 1440px) {
    padding: 21px 126px;
  }
`;

export const FormTitle = styled.h2`
  display: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 14px;

  @media (min-width: 1440px) {
    display: block;
  }
`;

export const FormText = styled.p`
  display: none;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;
  margin-bottom: 28px;

  @media (min-width: 1440px) {
    display: block;
  }
`;


