import IngredientsShoppingList from "../../components/IndegredientsShoppingList/IndegredientsShoppingList"
import { ShoppingPageStyled, TitleShoppingPage } from "./ShoppingListPageStyled.js"
import { RecipeIngredientsList } from "../../components/RecipePage/RecipeIngredientsList/RecipeIngredientsList.jsx"
import { ingredients } from "../../components/RecipePage/RecipeIngredientsList/ingredients.js"
const ShoppingListPage = () => {
    return (
        <ShoppingPageStyled>
            <TitleShoppingPage>Shopping list</TitleShoppingPage>
            <IngredientsShoppingList/>
            <RecipeIngredientsList ingredients={ingredients}/>
        </ShoppingPageStyled>
    )
}

export default ShoppingListPage
