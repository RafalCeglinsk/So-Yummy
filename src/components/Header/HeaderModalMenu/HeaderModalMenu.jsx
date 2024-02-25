import React from "react";
import { Outlet } from "react-router-dom";
import { IconClose } from "../ModalLogOut/ModalLogOut.styled";
import {
  Logo,
  ModalHeader,
  MainModal,
  NavLinks,
  HeaderModalWraper,
  WraperContainer,
  ModalCloseBtn,
  Leaf,
} from "../Header.styled";
import { RenderIcon } from "../HeaderRenderSvg";
import { SearchLens } from "../../RenderSvg/RenderSvg";
const Modal2 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const handleCloseModal = () => {
    onClose();
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <MainModal>
          <ModalHeader>
            <Logo onClick={handleCloseModal}>
              <RenderIcon />
            </Logo>
            <ModalCloseBtn onClick={onClose}>
              <IconClose />
            </ModalCloseBtn>
          </ModalHeader>
          <WraperContainer>
            <HeaderModalWraper>
              <NavLinks to="/Categories" onClick={handleCloseModal}>
                Categories
              </NavLinks>
              <NavLinks to="/add" onClick={handleCloseModal}>
                Add recipies
              </NavLinks>
              <NavLinks to="" onClick={handleCloseModal}>
                My recipies
              </NavLinks>
              <NavLinks to="/favorite" onClick={handleCloseModal}>
                Favorites
              </NavLinks>
              <NavLinks to="/shopping-list" onClick={handleCloseModal}>
                Shopping list
              </NavLinks>
              <NavLinks>
                <SearchLens />
                Search
              </NavLinks>
            </HeaderModalWraper>
            <Leaf></Leaf>
          </WraperContainer>
        </MainModal>
      </div>
      <Outlet />
    </div>
  );
};

export default Modal2;
