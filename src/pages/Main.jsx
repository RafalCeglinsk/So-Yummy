import { MainPage } from "../components/MainPageHero/MainPage";
import SearchBar from "../components/SearchBar/SearchBar";
import { MainWrapper } from "../components/MainPageHero/MainPage.styled";
import { SbMobileStyle } from "../components/MainPageHero/MainPage.styled";
import { MainGallery } from "../components/MainPageHero/PreviewCategories/MainGallery";
import Footer from "../components/footer/footer";
const Main = () => {
  return (
    <>
    <MainWrapper>
      {" "}
      <MainPage />
      <SbMobileStyle>
        <SearchBar />
      </SbMobileStyle>
    <MainGallery/>
    </MainWrapper>
         <Footer/>
         </>
  );
};

export default Main;
