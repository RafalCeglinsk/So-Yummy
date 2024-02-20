
//import IngredientsShoppingList from "../../components/IndegredientsShoppingList/IndegredientsShoppingList"
import { ShoppingPageStyled, TitleShoppingPage } from "./ShoppingListPageStyled.js"
import { RecipeIngredientsList } from "../../components/RecipePage/RecipeIngredientsList/RecipeIngredientsList.jsx"

const ShoppingListPage = () => {
    return (
        <ShoppingPageStyled>
            <TitleShoppingPage>Shopping list</TitleShoppingPage>
            <RecipeIngredientsList/>
            {/*<IngredientsShoppingList/>*/}
            <></>
        </ShoppingPageStyled>
    )
}

export default ShoppingListPage
