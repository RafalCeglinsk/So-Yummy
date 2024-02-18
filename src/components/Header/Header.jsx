import React, { useState } from "react";
import { RenderIcon, RenderHamburger } from "./HeaderRenderSvg";
import { Logo, Profile, Photo, UserName, Main } from "./Header.styled";
import Modal2 from "./HeaderModalMenu";
import Modal1 from "./HeaderModalProfile";
import Modal3 from "./ModalUserProfile";
import Modal4 from "./ModalLogOut";

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
    <header>
      <Profile>
        <Logo>
          <RenderIcon />
        </Logo>
        <Main>
          <Photo onClick={openModal1}></Photo>
          <UserName>UserName</UserName>
          <Logo onClick={openModal2}>
            <RenderHamburger />
          </Logo>
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
    </header>
  );
};

export default Header;
