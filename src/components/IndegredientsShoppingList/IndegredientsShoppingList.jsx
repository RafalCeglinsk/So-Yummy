import { useEffect } from "react";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import vegetableBasket from "../../images/IndegredientsShoppingList/vegetableBasket.jpg";
import vegetableBasket2x from "../../images/IndegredientsShoppingList/vegetableBasket2x.jpg";
import {
  getShoppingThunk,
  deleteShoppingThunk,
} from "../../redux/shoppingList/operations.js";
import {
  EmptyStyled,
  PictrueContainerStyled,
} from "./IndegredientsShoppingListStyled.js";

const IngredientsShoppingList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShoppingThunk());
  }, [dispatch]);
  const { shopping } = useSelector((state) => {
    return state.shopping;
  });

  const deleteButton = (id) => {
    dispatch(deleteShoppingThunk(id));
  };

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
              shopping.items?.map((item) => {
                return (
                  <li key={item.Id}>
                    <div>
                      <img src={item.img} alt={item.desc} height="60" />
                      <p>{item.name}</p>
                    </div>
                    <div>
                      {item.measure.split("/r/n").map((el) => (
                        <div key={nanoid()}>
                          <p>{el}</p>
                          <button onClick={() => deleteButton(item.Id)}>
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
};

export default IngredientsShoppingList;
