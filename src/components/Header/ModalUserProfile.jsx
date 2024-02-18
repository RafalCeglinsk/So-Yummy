import React, { useRef } from "react";
import useModalOutsideClick from "./ModalClose";
import { ModalBackGround, BtnClose } from "./ModalLogOut.styled";
import {
  UserProfileContainer,
  UserAvatar,
  UserInput,
  BtnSave,
  UserForm,
} from "./ModalUserProfile.styled";

const Modal3 = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useModalOutsideClick(modalRef, onClose);

  if (!isOpen) return null;

  return (
    <ModalBackGround ref={modalRef}>
      <UserProfileContainer>
        <BtnClose onClick={onClose}>X</BtnClose>
        <UserAvatar></UserAvatar>
        <UserForm>
          <UserInput type="User" placeholder="UserName"></UserInput>
        </UserForm>
        <BtnSave>Save changes</BtnSave>
      </UserProfileContainer>
    </ModalBackGround>
  );
};

export default Modal3;
