import { Button } from "./RecipePage.styled";

export const AddButton = (props) => {
  return (
    <Button>
      <span>{props.text}</span>
    </Button>
  );
};
