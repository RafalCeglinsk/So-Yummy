import {
  ScrollContainer,
  ScrollItem,
  StyledUl,
} from "../HorizontalScrollList/HorizontalScrollList.styled";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategories,
  selectCategory,
} from "../../../redux/Categories/selectors";
import { getCategories } from "../../../redux/Categories/operations";
import { useNavigate } from "react-router-dom";

export const HorizontalScrollList = () => {
  const scrollRef = useRef();
  const category = useSelector(selectCategory);
  const categories = useSelector(selectCategories);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleWheel = (e) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  const handleCategoryClick = (category) => {
    navigate(`/categories/${category}`);
  };

  return (
    <ScrollContainer ref={scrollRef} onWheel={handleWheel}>
      <StyledUl>
        {categories.map((category, index) => (
          <li key={index} onClick={() => handleCategoryClick(category)}>
            <ScrollItem>{category}</ScrollItem>
          </li>
        ))}
      </StyledUl>
    </ScrollContainer>
  );
};
