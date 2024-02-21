import { NavLink } from "react-router-dom";
import { StartLogoSmall, StartLogoBig } from "../RenderSvg/RenderSvg";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import {
  CurvedButtonColor,
  CurvedButtonTransparent,
} from "../Buttons/CurvedButton";
import { BackgroundSection, Div, H1, P } from "./Home.styled";
import mobileSmallPhoto from "../../images/HomePage/mobileStartx1.jpg";
import mobileBigPhoto from "../../images/HomePage/mobileStartx2.jpg";
import tabletSmallPhoto from "../../images/HomePage/tabletStartx1.jpg";
import tabletBigPhoto from "../../images/HomePage/tabletStartx2.jpg";
import desktopSmallPhoto from "../../images/HomePage/desktopStartx1.jpg";
import desktopBigPhoto from "../../images/HomePage/desktopStartx2.jpg";

export const Home = () => {
  const width = useWindowWidth();
  const isDesktop = width >= 768;

  return (
    <BackgroundSection
      mobileimage={mobileSmallPhoto}
      mobileiretinaimage={mobileBigPhoto}
      tabletimage={tabletSmallPhoto}
      tabletretinaimage={tabletBigPhoto}
      desktopimage={desktopSmallPhoto}
      desktopretinaimage={desktopBigPhoto}
    >
      <Div>
        {isDesktop ? <StartLogoBig /> : <StartLogoSmall />}
        <H1>Welcome to the app!</H1>
        <P>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </P>
        <div>
          <NavLink to="/auth/register">
            <CurvedButtonColor text="Register" />
          </NavLink>
          <NavLink to="/auth/login">
            <CurvedButtonTransparent text="Sign in" />
          </NavLink>
        </div>
      </Div>
    </BackgroundSection>
  );
};
