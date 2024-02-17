import { MainPage } from "../components/MainPageHero/MainPage";
import SearchBar from "../components/SearchBar/SearchBar";
import { MainWrapper } from "../components/MainPageHero/MainPage.styled";
import { SbMobileStyle } from "../components/MainPageHero/MainPage.styled";

const Main = () => {
  return (
    <MainWrapper>
      {" "}
      <MainPage />
      <SbMobileStyle>
      <SearchBar />
      </SbMobileStyle>
    </MainWrapper>
  );
};

export default Main;
