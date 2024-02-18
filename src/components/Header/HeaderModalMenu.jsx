import React from 'react';
import {
  Logo,
  ModalHeader,
  MainModal,
  NavLinks,
  HeaderModalWraper,
  WraperContainer,
  ModalCloseBtn,
} from './Header.styled';
import { RenderIcon } from './HeaderRenderSvg';

const Modal2 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <MainModal>
          <ModalHeader>
            <Logo>
              <RenderIcon />
            </Logo>
            <ModalCloseBtn onClick={onClose}>X</ModalCloseBtn>
          </ModalHeader>
          <WraperContainer>
            <HeaderModalWraper>
              <NavLinks>Categories</NavLinks>
              <NavLinks>Add recipies</NavLinks>
              <NavLinks>My recipies</NavLinks>
              <NavLinks>Favorites</NavLinks>
              <NavLinks>Shopping list</NavLinks>
              <NavLinks>Search</NavLinks>
            </HeaderModalWraper>
          </WraperContainer>
        </MainModal>
      </div>
    </div>
  );
};

export default Modal2;
