import {
  Description,
  Placeholder,
  PreparationHeader,
  RecipeImage,
  RecipeWrapper,
  StyledLi,
  StyledOl,
  StyledListContainer,
} from "./RecipePreparation.styled";

export const RecipePreparation = ({ recipe }) => {
  const instructions = recipe.instructions;
  const steps = instructions.split("\r\n\r");

  return (
    <RecipeWrapper>
      <Description>
        <PreparationHeader>Recipe Preparation</PreparationHeader>
        {steps.length > 0 ? (
          <StyledOl>
            {steps.map((step, index) => (
              <StyledListContainer key={index}>
                <StyledLi>
                  {step.split(";").map((subStep, subIndex) => (
                    <p key={subIndex}>{subStep}</p>
                  ))}
                </StyledLi>
              </StyledListContainer>
            ))}
          </StyledOl>
        ) : (
          <Placeholder>No instructions to display</Placeholder>
        )}
        <RecipeImage src={recipe.thumb} alt="Recipe" />
      </Description>
    </RecipeWrapper>
  );
};
