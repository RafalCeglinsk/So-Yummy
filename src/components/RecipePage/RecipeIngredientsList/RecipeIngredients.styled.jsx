import styled from "styled-components";

export const SectionWrapper = styled.div`
  padding: 32px 16px 50px 16px;
  @media screen and (min-width: 768px) {
    padding: 50px 32px 96px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 50px 100px 100px 100px;
  }
`;

export const HeadContainer = styled.div`
  background-color: var(--color-icons-3);
  padding: 12px 14px;
  border-radius: 8px;
  height: auto;
  text-align: left;
  @media screen and (min-width: 768px) {
    padding: 21px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 21px 40px;
  }
`;

export const HeadUl = styled.ul`
  display: flex;
  list-style-type: none;
  color: var(--color-text-7);
  font-weight: 600;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.03em;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
  }
`;

export const LiIngredients = styled.li``;

export const LiNumber = styled.li`
  padding-left: 138px;
  @media screen and (min-width: 768px) {
    padding-left: 314px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 761px;
  }
`;

export const LiAdd = styled.li`
  padding-left: 18px;
  @media screen and (min-width: 768px) {
    padding-left: 38px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 109px;
  }
`;

export const IngredientsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  gap: 16px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 24px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 50px;
  }
`;
export const IngredientsListUl = styled.ul`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: var(--color-ingredient-bg);
  width: 100%;
`;

export const IngredientsListLi = styled.li`
  position: relative;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  & > img {
    padding-left: 10px;
    width: 65px;
    height: 65px;
    @media screen and (min-width: 768px) {
      width: 144px;
      height: 146px;
    }
    @media screen and (min-width: 1440px) {
      width: 180px;
      height: 180px;
    }
  }
  & > span {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.16;
    letter-spacing: -0.24px;
    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 1;
    }
    @media screen and (min-width: 1440px) {
      width: 547px;
    }
  }
  & > div {
    padding: 4px 14px;
    background-color: var(--color-text-5);
    border-radius: 4px;
    color: var(--color-text-7);
    font-size: 10px;
    font-weight: 600;
    line-height: 1.5;

    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 1.5;
    }
    @media screen and (min-width: 1440px) {
    }
  }

  input[type="checkbox"] {
    display: none;
  }

  label {
    cursor: pointer;
  }

  label:before {
    content: "";

    position: absolute;
    top: 32%;
    right: 5%;
    width: 18px;
    height: 18px;
    border: 2px solid var(--checkbox-color);
    border-radius: 4px;
    @media screen and (min-width: 768px) {
      width: 35px;
      height: 35px;
      top: 35%;
    }
    @media screen and (min-width: 1440px) {
      top: 37%;
    }
  }

  input[type="checkbox"]:checked + label:after {
    content: "";
    position: absolute;
    top: 35%;
    right: 6.5%;
    width: 6px;
    height: 12px;
    border: 1px solid var(--color-icons-3);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    @media screen and (min-width: 768px) {
      width: 17px;
      height: 25px;
      top: 33%;
      right: 6%;
    }
    @media screen and (min-width: 1440px) {
      right: 5.5%;
      top: 35%;
    }
  }
`;
