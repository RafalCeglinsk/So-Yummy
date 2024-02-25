import {
  ScrollContainer,
  ScrollItem,
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
    const fetchData = async () => {
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
      {categories.map((category, _id) => (
        <ScrollItem key={_id}>{category}</ScrollItem>
      ))}
    </ScrollContainer>
  );
};
