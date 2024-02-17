import { ButtonColor, ButtonTransparent } from "./CurvedButton.styled";

export const CurvedButtonColor = (props) => {
  return <ButtonColor>{props.text}</ButtonColor>;
};

export const CurvedButtonTransparent = (props) => {
  return <ButtonTransparent>{props.text}</ButtonTransparent>;
};
