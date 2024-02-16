import { BackgroundSection, Div, Logo } from "./Home.styled";
// import bgPhoto from "../../images/HomePage/mobileStart.png";

export const Home = () => {
  return (
    // <BackgroundSection image={bgPhoto}>
    <Div>
      <Logo>Logo</Logo>
      <h1>Welcome to the app!</h1>
      <p>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>
      <div>
        <button>Registration</button>
        <button>Sign in</button>
      </div>
    </Div>
    // </BackgroundSection>
  );
};
