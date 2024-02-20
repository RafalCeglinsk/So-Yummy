import React, { useState } from "react";

import { RenderHamburger } from "./HeaderRenderSvg";

import {
  Logo,
  Profile,
  Photo,
  UserName,
  Main,
  LogoBurger,
  Nav,
  NavLinks,
  HeaderContainer,
  LogoIcon,
  Loop,
} from "./Header.styled";
import Modal2 from "./HeaderModalMenu/HeaderModalMenu";
import Modal1 from "./HeaderModalProfile/HeaderModalProfile";
import Modal3 from "./ModalUserProfile/ModalUserProfile";
import Modal4 from "./ModalLogOut/ModalLogOut";

const Header = () => {
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [modal3IsOpen, setModal3IsOpen] = useState(false);
  const [modal4IsOpen, setModal4IsOpen] = useState(false);

  const openModal1 = () => {
    setModal1IsOpen(true);
  };

  const closeModal1 = () => {
    setModal1IsOpen(false);
  };

  const openModal2 = () => {
    setModal2IsOpen(true);
  };

  const closeModal2 = () => {
    setModal2IsOpen(false);
  };
  const openModal3 = () => {
    setModal3IsOpen(true);
  };

  const closeModal3 = () => {
    setModal3IsOpen(false);
  };
  const openModal4 = () => {
    setModal4IsOpen(true);
  };

  const closeModal4 = () => {
    setModal4IsOpen(false);
  };

  return (
    <HeaderContainer>
      <Profile>
        <Logo to="/Main">
          <LogoIcon />
        </Logo>
        <Nav>
          <NavLinks to="/Categories">Categories</NavLinks>
          <NavLinks to="/AddRecipies">Add recipies</NavLinks>
          <NavLinks to="/MyRecipies">My recipies</NavLinks>
          <NavLinks to="/Favorites">Favorites</NavLinks>
          <NavLinks to="/ShoppingList">Shopping list</NavLinks>
          <NavLinks>
            <Loop />
          </NavLinks>
        </Nav>
        <Main>
          <Photo onClick={openModal1}></Photo>
          <UserName>UserName</UserName>
          <LogoBurger onClick={openModal2}>
            <RenderHamburger />
          </LogoBurger>
        </Main>
      </Profile>

      <Modal2 isOpen={modal2IsOpen} onClose={closeModal2} />
      <Modal1
        isOpen={modal1IsOpen}
        onClose={closeModal1}
        openModal3={openModal3}
        openModal4={openModal4}
      />
      <Modal3 isOpen={modal3IsOpen} onClose={closeModal3} />
      <Modal4 isOpen={modal4IsOpen} onClose={closeModal4} />
    </HeaderContainer>
  );
};

export default Header;
