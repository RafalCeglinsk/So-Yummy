import styled from "styled-components"

const ShoppingPageStyled = styled.div`
padding-top: 72px;
margin: 0 auto;
padding-left: 16px;
padding-right: 16px;
width: 100%;

@media (min-width: 480px) {
    width:480px
}

@media (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
}

@media (min-width: 1280px) {
    width: 1280px
}
`



const TitleShoppingPage = styled.h2`
color: var(--color-text-1);
font-weight: 600;
font-size: 28px;
line-height: 28px;
letter-spacing: -2%;

@media screen and (min-width: 768px) {
   font-size: 32px;
   line-height: 32px;
   letter-spacing: -0.64px;
}
@media screen and (min-width: 1280px) {
   font-size: 44px;
   line-height: 44px;
   letter-spacing: -0.88px;
}
`

export {ShoppingPageStyled, TitleShoppingPage} 