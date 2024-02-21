import { useEffect } from "react";
import {nanoid} from "nanoid"
import { useSelector, useDispatch } from "react-redux";
import vegetableBasket from "../../images/IndegredientsShoppingList/vegetableBasket.jpg"
import vegetableBasket2x from "../../images/IndegredientsShoppingList/vegetableBasket2x.jpg"
import {getShoppingThunk, deleteShoppingThunk} from "../../redux/shoppingList/thunkShopping.js"
import { EmptyStyled, PictrueContainerStyled } from "./IndegredientsShoppingListStyled.js";

const IngredientsShoppingList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getShoppingThunk())
    },[dispatch])
    const {shopping} = useSelector((state) => {
        return state.shopping
    })

    const deleteButton = (id) => {
        dispatch(deleteShoppingThunk(id))
    }

    return (
        <div>
          {shopping.isLoading ? null : (
            <>
              {shopping.items.length > 0 && (
                <div>
                  <h3>Product</h3>
                  <p>Number</p>
                  <p>Remove</p>
                </div>
              )}
              <ul>
                {shopping.items.length === 0 ? (
                  <PictrueContainerStyled>
                    <picture>
                      <source
                        srcSet={`${vegetableBasket}, ${vegetableBasket2x} 2x`}
                        media="(max-width: 767px)"
                        sizes="(min-width: 259px) 259px, 100vw"
                      />
                       <source
                              srcSet={`${vegetableBasket}, ${vegetableBasket2x} 2x`}
                              media="(min-width: 768px)"
                              sizes="(min-width: 498px) 498px, 100vw"
                           />
                      <img src={vegetableBasket} alt="No recipe" />
                    </picture>
                    <EmptyStyled>Shopping list is empty</EmptyStyled>
                  </PictrueContainerStyled>
                ) : (
                  shopping.items?.map((ingredient) => {
                    return (
                      <li key={ingredient._id.$oid}>
                        <div>
                          <img
                            src={ingredient.thb}
                            alt={ingredient.ttl}
                            height="60"
                          />
                          <p>{ingredient.ttl}</p>
                        </div>
                        <div>
                          {ingredient.measure.split("/r/n").map((el) => (
                            <div key={nanoid()}>
                              <p>{el}</p>
                              <button onClick={() => deleteButton(ingredient._id.$oid)}>
                                Delete
                              </button>
                            </div>
                          ))}
                        </div>
                      </li>
                    );
                  })
                )}
              </ul>
            </>
          )}
        </div>
        

      );

                }


export default IngredientsShoppingList