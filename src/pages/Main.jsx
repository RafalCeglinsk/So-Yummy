import { MainPage } from "../components/MainPageHero/MainPage";
import SearchBar from "../components/SearchBar/SearchBar";
import { MainWrapper } from "../components/MainPageHero/MainPage.styled";

const Main = () => {
  return (
    <MainWrapper>
      {" "}
      <MainPage />
      <SearchBar />
    </MainWrapper>
  );
};

export default Main;
