import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const BackgroundSection = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Logo = styled.div`
  width: 68px;
  height: 68px;
  background-color: #8baa36;
`;
