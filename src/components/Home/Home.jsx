import { BackgroundSection, Div, H1, P } from "./Home.styled";
import {
  CurvedButtonColor,
  CurvedButtonTransparent,
} from "../Buttons/CurvedButton";
import { StartLogoSmall } from "../RenderSvg/RenderSvg";
import bgPhoto from "../../images/HomePage/mobileStartx1.png";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <BackgroundSection image={bgPhoto}>
      <Div>
        <StartLogoSmall />
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
