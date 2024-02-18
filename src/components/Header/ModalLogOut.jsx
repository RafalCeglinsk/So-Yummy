import React, { useRef } from "react";
import useModalOutsideClick from "./ModalClose";
import {
  LogOutContainer,
  LogOutText,
  BtnLogOut,
  BtnCancel,
  BtnClose,
  BtnContainer,
  ModalBackGround,
  ModalContent,
} from "./ModalLogOut.styled";
const Modal4 = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useModalOutsideClick(modalRef, onClose);

  if (!isOpen) return null;

  return (
    <ModalBackGround ref={modalRef}>
      <LogOutContainer>
        <BtnClose onClick={onClose}>X</BtnClose>
        <ModalContent>
          <LogOutText>Are you sure you want to log out?</LogOutText>
          <BtnContainer>
            <BtnLogOut>Log out</BtnLogOut>
            <BtnCancel onClick={onClose}>Cancel</BtnCancel>
          </BtnContainer>
        </ModalContent>
      </LogOutContainer>
    </ModalBackGround>
  );
};

export default Modal4;
