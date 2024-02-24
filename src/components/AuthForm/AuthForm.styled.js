import styled from "styled-components";
import { NavLink } from "react-router-dom";

const device = {
  tablet: "768px",
  desktop: "1440px",
};

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  background-color: var(--color-bg-start);
  padding: 32px 28px 40px;
  z-index: 20;

  @media (min-width: ${device.tablet}) {
    max-width: 500px;
    padding: 44px 50px;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (min-width: ${device.desktop}) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
  }
`;

export const Desktop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H2 = styled.h2`
  color: var(--color-default-1);
  padding-bottom: 18px;

  @media (min-width: ${device.tablet}) {
    padding-bottom: 32px;
  }
`;

export const StyledLabel = styled.label`
  padding-bottom: 12px;

  @media (min-width: ${device.tablet}) {
    padding-bottom: 24px;
  }
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: 1px solid var(--color-default-1);
  opacity: 0.8;
  border-radius: 6px;
  padding: 12px;
  width: 70vw;

  &::placeholder {
    color: var(--color-default-1);
    opacity: 0.8;
  }

  @media (min-width: ${device.tablet}) {
    padding: 17.5px;
    max-width: 400px;
    font-size: 18px;
  }
`;

export const StyledSpan = styled.span`
  color: var(--color-default-1);
  padding-right: 10px;
`;

export const FormButton = styled.button`
  padding: 12px;
  font-size: 16px;
  background-color: var(--color-text-5);
  color: var(--color-default-1);
  border-radius: 6px;

  @media (min-width: ${device.tablet}) {
    padding: 19px;
  }
`;

export const Logo = styled.div`
  width: 285px;
  height: 250px;
  background-image: url(${(props) => props.mobileimage});
  background-repeat: no-repeat;
  margin-bottom: -32px;

  @media (min-width: ${device.tablet}) {
    width: 409px;
    height: 359px;
    margin-bottom: -15px;
    background-image: url(${(props) => props.tabletimage});
  }

  @media (min-width: ${device.desktop}) {
    width: 532px;
    height: 468px;
    z-index: 2;
    background-image: url(${(props) => props.desktopimage});
  }
`;

export const StyledLink = styled(NavLink)`
  color: var(--color-default-1);
  text-align: center;
  margin: 18px;
  text-decoration: underline;

  @media (min-width: ${device.tablet}) {
    font-size: 16px;
  }
`;

export const Background = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100vw;
  height: 490px;
  z-index: -50;
  background-image: url(${(props) => props.mobilebackground});

  @media (min-width: ${device.tablet}) {
    height: 606px;
    background-image: url(${(props) => props.tabletbackground});
  }

  @media (min-width: ${device.desktop}) {
    height: 325px;
    background-image: url(${(props) => props.desktopbackground});
  }
`;
