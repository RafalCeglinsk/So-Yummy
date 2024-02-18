import React, { useRef } from "react";
import useModalOutsideClick from "./ModalClose";
import {
  ModalProfile,
  ModalProfileEdit,
  ProfileEdit,
  LogOutBtn,
  StyleSvg,
} from "./Header.styled";
import { Pencil, RenderArrow } from "../RenderSvg/RenderSvg";
import Modal4 from "./ModalLogOut";

const Modal1 = ({ isOpen, onClose, openModal4, openModal3 }) => {
  const modalRef = useRef(null);

  useModalOutsideClick(modalRef, onClose);

  if (!isOpen) return null;

  return (
    <ModalProfile ref={modalRef}>
      <ModalProfileEdit>
        <ProfileEdit>Edit profile</ProfileEdit>
        <StyleSvg onClick={openModal3}>
          {" "}
          <Pencil />
        </StyleSvg>
      </ModalProfileEdit>
      <LogOutBtn onClick={openModal4}>
        Log out
        <RenderArrow />
      </LogOutBtn>
      <Modal4 />
    </ModalProfile>
  );
};

export default Modal1;
