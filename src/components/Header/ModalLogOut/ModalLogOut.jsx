import React, { useRef } from "react";
import useModalOutsideClick from "../ModalClose";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  LogOutContainer,
  LogOutText,
  BtnLogOut,
  BtnCancel,
  BtnClose,
  BtnContainer,
  ModalBackGround,
  ModalContent,
  IconClose,
} from "./ModalLogOut.styled";
import { logout } from "../../../redux/auth/operations";
const Modal4 = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useModalOutsideClick(modalRef, onClose);

  if (!isOpen) return null;

  const handleSubmit = async () => {
    await dispatch(logout());
    navigate("/auth/login");
    onClose();
  };

  return (
    <ModalBackGround ref={modalRef}>
      <LogOutContainer>
        <BtnClose onClick={onClose}>
          <IconClose />
        </BtnClose>
        <ModalContent>
          <LogOutText>Are you sure you want to log out?</LogOutText>
          <BtnContainer>
            <BtnLogOut onClick={handleSubmit}>Log out</BtnLogOut>
            <BtnCancel onClick={onClose}>Cancel</BtnCancel>
          </BtnContainer>
        </ModalContent>
      </LogOutContainer>
    </ModalBackGround>
  );
};

export default Modal4;
