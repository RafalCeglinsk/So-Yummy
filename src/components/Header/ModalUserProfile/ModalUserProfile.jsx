import React, { useRef } from "react";
import useModalOutsideClick from "../ModalClose";
import {
  ModalBackGround,
  BtnClose,
  IconClose,
} from "../ModalLogOut/ModalLogOut.styled";
import { FormUser, FormUserInput } from "../../RenderSvg/RenderSvg";

import {
  UserProfileContainer,
  UserAvatar,
  UserInput,
  BtnSave,
  UserForm,
  UserIcon,
  IconPlus,
  Pencil,
} from "./ModalUserProfile.styled";

const Modal3 = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useModalOutsideClick(modalRef, onClose);

  if (!isOpen) return null;

  return (
    <ModalBackGround>
      <UserProfileContainer ref={modalRef}>
        <BtnClose onClick={onClose}>
          <IconClose />
        </BtnClose>
        <UserAvatar>
          <FormUser />
          <IconPlus>+</IconPlus>
        </UserAvatar>
        <UserForm>
          <UserIcon>
            <FormUserInput />
          </UserIcon>
          <UserInput type="text" placeholder="UserName"></UserInput>

          <Pencil />
        </UserForm>
        <BtnSave>Save changes</BtnSave>
      </UserProfileContainer>
    </ModalBackGround>
  );
};

export default Modal3;
