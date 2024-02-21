import React from "react";

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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <MainModal>
          <ModalHeader>
            <Logo>
              <RenderIcon />
            </Logo>
            <ModalCloseBtn onClick={onClose}>
              <IconClose />
            </ModalCloseBtn>
          </ModalHeader>
          <WraperContainer>
            <HeaderModalWraper>
              <NavLinks to="/Categories">Categories</NavLinks>
              <NavLinks to="/AddRecipies">Add recipies</NavLinks>
              <NavLinks to="/MyRecipies">My recipies</NavLinks>
              <NavLinks to="/Favorites">Favorites</NavLinks>
              <NavLinks to="/ShoppingList">Shopping list</NavLinks>
              <NavLinks>
                <SearchLens />
                Search
              </NavLinks>
            </HeaderModalWraper>
            <Leaf></Leaf>
          </WraperContainer>
        </MainModal>
      </div>
    </div>
  );
};

export default Modal2;
