import styled from 'styled-components';

export const StyledIcon = styled.div`
  position: relative;
  width: 20px;
  height: auto;
  fill: #8BAA36;
  margin-right: 15px;
  transition: transform 0.3s ease-in-out;
  padding-bottom: 50px;
  
  &:hover {
    transform: scale(2.0);
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const FollowUsContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 95px;
  justify-content: center;

  @media screen and (max-width: 767px) {
    position: relative;
    top: 230px;
    padding-top: 0px;
  }
`;