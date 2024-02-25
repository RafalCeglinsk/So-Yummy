import { useEffect } from "react";
import {nanoid} from "nanoid"
import { useSelector, useDispatch } from "react-redux";
import vegetableBasket from "../../images/IndegredientsShoppingList/vegetableBasket.jpg"
import vegetableBasket2x from "../../images/IndegredientsShoppingList/vegetableBasket2x.jpg"
import {getShoppingThunk, deleteShoppingThunk} from "../../redux/shoppingList/thunkShopping.js"
import { EmptyStyled, PictrueContainerStyled, 
  StyledIngridientsHeader,
  StyledIngridientsItem,
  StyledIngrsHeadThumb,
  StyledIngridientsContainer,
  StyledImageCardThumb,
  StyledImage,
  StyledQuantity,
  StyledFlexRow,
  StyledFlexQuantity,
  StyledListContainerIngridient,  } from "./IndegredientsShoppingListStyled.js";

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
        <StyledIngridientsContainer>
          {shopping.isLoading ? null : (
            <>
              {shopping.items.length > 0 && (
                <StyledIngridientsHeader>
                  <h3>Product</h3>
                  <StyledIngrsHeadThumb>
                  <p>Number</p>
                  <p>Remove</p>
                </StyledIngrsHeadThumb>
                </StyledIngridientsHeader>
              )}
              < StyledListContainerIngridient>
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
                      <StyledIngridientsItem  key={item.Id}>
                        <StyledImageCardThumb>
                          <StyledImage
                            src={item.img}
                            alt={item.desc}
                            height="60"
                          />
                          <p>{item.name}</p>
                        </StyledImageCardThumb>
                        <StyledFlexQuantity>
                        <StyledFlexRow>
                          {item.measure.split("/r/n").map((el) => (
                            <StyledQuantity key={nanoid()}>
                              <p>{el}</p>
                              <button onClick={() => deleteButton(item.Id)}>
                                Delete
                              </button>
                            </StyledQuantity>
                          ))}
                          </StyledFlexRow>
                        </StyledFlexQuantity>
                      </StyledIngridientsItem >
                    );
                  })
                )}
              </StyledListContainerIngridient>
            </>
          )}
        </StyledIngridientsContainer>
        

      );

                }
export default IngredientsShoppingList