import { Link } from "react-router-dom";
import { MainPage } from "../components/MainPageHero/MainPage";
import SearchBar from "../components/SearchBar/SearchBar";
import { MainGallery } from "../components/MainPageHero/PreviewCategories/MainGallery";
import Footer from "../components/footer/footer";
import { CurvedButtonMain } from "../components/Buttons/CurvedButton";

import { MainWrapper } from "../components/MainPageHero/MainPage.styled";
import { SbMobileStyle } from "../components/MainPageHero/MainPage.styled";

const Main = () => {
  return (
    <>
      <MainWrapper>
        {" "}
        <MainPage />
        <SbMobileStyle>
          <SearchBar showSearchContainer={false}/>
        </SbMobileStyle>
        <MainGallery />
        <Link to="/categories/Beef">
          <CurvedButtonMain text="Other categories" />
        </Link>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Main;
