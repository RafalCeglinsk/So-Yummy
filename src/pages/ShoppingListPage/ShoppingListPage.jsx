
import IngredientsShoppingList from "../../components/IndegredientsShoppingList/IndegredientsShoppingList"
import { ShoppingPageStyled, TitleShoppingPage } from "./ShoppingListPageStyled.js"
const ShoppingListPage = () => {
    return (
        <ShoppingPageStyled>
            <TitleShoppingPage>Shopping list</TitleShoppingPage>
            <IngredientsShoppingList/>
        </ShoppingPageStyled>
    )
}

export default ShoppingListPage
