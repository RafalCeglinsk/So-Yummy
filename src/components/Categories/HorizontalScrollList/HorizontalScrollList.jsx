import {
  ScrollContainer,
  ScrollItem,
  StyledUl,
} from "../HorizontalScrollList/HorizontalScrollList.styled";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../../redux/Categories/selectors";
import { getCategories } from "../../../redux/Categories/operations";
import { useNavigate } from "react-router-dom";

export const HorizontalScrollList = () => {
  const scrollRef = useRef();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = useSelector(selectCategories);
  const navigate = useNavigate();
  console.log(categories);
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
    setSelectedCategory(category);
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
