import { useEffect } from "react";
import {nanoid} from "nanoid"
import { useSelector, useDispatch } from "react-redux";
import vegetableBasket from "../../images/IndegredientsShoppingList/vegetableBasket.jpg"
import vegetableBasket2x from "../../images/IndegredientsShoppingList/vegetableBasket2x.jpg"


import {getShoppingThunk, deleteShoppingThunk} from "../../redux/shoppingList/thunkShopping.js"

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
                  <div>
                    <picture>
                      <source
                        srcSet={`${vegetableBasket}, ${vegetableBasket2x} 2x`}
                        media="(max-width: 767px)"
                        sizes="(min-width: 259px) 259px, 100vw"
                      />
                       <source
                              srcSet={`${vegetableBasket}, ${vegetableBasket2x} 2x`}
                              media="(min-width: 768px)"
                              sizes="(min-width: 480px) 480px, 100vw"
                           />
                      <img src={vegetableBasket} alt="No recipe" />
                    </picture>
                    <p>Shopping list is empty</p>
                  </div>
                ) : (
                  shopping.items?.map((item) => {
                    return (
                      <li key={item.ingredientId}>
                        <div>
                          <img
                            src={item.ingredient.img}
                            alt={item.desc}
                            height="60"
                          />
                          <p>{item.ingredient.name}</p>
                        </div>
                        <div>
                          {item.measure.split("/r/n").map((el) => (
                            <div key={nanoid()}>
                              <p>{el}</p>
                              <button onClick={() => deleteButton(item.ingredientId)}>
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