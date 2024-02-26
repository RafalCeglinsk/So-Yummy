
import IngredientsShoppingList from "../../components/IndegredientsShoppingList/IndegredientsShoppingList"
import { ShoppingPageStyled, TitleShoppingPage } from "./ShoppingListPageStyled.js"
import { MainTitle } from "../../components/MainPageTittle/MainPageTittle.jsx"
const ShoppingListPage = () => {
    return (
<>
    <MainTitle>Shopping List</MainTitle>
        <ShoppingPageStyled>

            <IngredientsShoppingList/>
        </ShoppingPageStyled>
        </>
    )
}

export default ShoppingListPage
