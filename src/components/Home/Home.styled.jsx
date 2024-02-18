import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: var(--color-default-1);
`;

export const BackgroundSection = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const H1 = styled.h1`
  padding: 24px 0 14px;
  font-size: 24px;
`;

export const P = styled.p`
  margin: 0px 35px;
  text-align: center;
  padding-bottom: 44px;
`;
