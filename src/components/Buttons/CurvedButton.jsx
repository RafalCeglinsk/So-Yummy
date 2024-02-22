import { ButtonColor, ButtonTransparent , CurvedMain} from "./CurvedButton.styled";

export const CurvedButtonColor = (props) => {
  return <ButtonColor>{props.text}</ButtonColor>;
};

export const CurvedButtonTransparent = (props) => {
  return <ButtonTransparent>{props.text}</ButtonTransparent>;
};
export const CurvedButtonMain= (props)=>{

  return <CurvedMain>{props.text}</CurvedMain>
}