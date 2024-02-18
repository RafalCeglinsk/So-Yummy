import { MainPage } from "../components/MainPageHero/MainPage";
import SearchBar from "../components/SearchBar/SearchBar";
import { MainWrapper } from "../components/MainPageHero/MainPage.styled";
import { SbMobileStyle } from "../components/MainPageHero/MainPage.styled";
import PreviewCategories from "../components/MainPageHero/PreviewCategories/PreviewCategories";
import { GalleryElement } from "../components/GalleryElement/GalleryElement";
const Main = () => {
  return (
    <MainWrapper>
      {" "}
      <MainPage />
      <SbMobileStyle>
      <SearchBar />
      </SbMobileStyle>
 <GalleryElement/>
    </MainWrapper>
  );
};

export default Main;
