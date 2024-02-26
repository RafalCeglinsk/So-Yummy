import {
  ScrollContainer,
  ScrollItem,
  StyledUl,
} from "../HorizontalScrollList/HorizontalScrollList.styled";
import { useEffect, useState, useRef } from "react";
import { getSortedCategories } from "../../../api/getSortedCategories";

export const HorizontalScrollList = () => {
  const scrollRef = useRef();
  const [categories, setCategories] = useState([]);

  const handleWheel = (e) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const fetchData = async (_id) => {
      try {
        const data = await getSortedCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollContainer ref={scrollRef} onWheel={handleWheel}>
      <StyledUl>
        {categories.map((category, _id) => (
          <li>
            <ScrollItem key={_id}>{category}</ScrollItem>
          </li>
        ))}
      </StyledUl>
    </ScrollContainer>
  );
};
