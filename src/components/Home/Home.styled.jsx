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
  background-image: url(${(props) => props.mobileiretinaimage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${(props) => props.mobileiretinaimage});
  }

  @media (min-width: 768px) {
    background-image: url(${(props) => props.tabletimage});

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${(props) => props.tabletretinaimage});
    }
  }

  @media (min-width: 1440px) {
    background-image: url(${(props) => props.desktopimage});

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      background-image: url(${(props) => props.desktopretinaimage});
    }
  }
`;

export const H1 = styled.h1`
  padding: 24px 0 14px;
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const P = styled.p`
  margin: 0px 35px;
  text-align: center;
  padding-bottom: 44px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
