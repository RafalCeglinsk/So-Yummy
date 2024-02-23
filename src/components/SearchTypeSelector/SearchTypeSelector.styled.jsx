import styled from "styled-components";

export const SearchContainer = styled.div`
padding: 35px 0px ;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SearchSpan = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-right: 8px;
`;

export const Select = styled.select`
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  appearance: none;
  outline: none;
  background: #fff;
  cursor: pointer;

  &:focus {
    border-color: #999;
  }
`;

export const Option = styled.option`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    background: #fafafa;
  }
`;