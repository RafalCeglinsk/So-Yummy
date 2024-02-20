import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  @media screen and (min-width: 375px) {
    width: 375px
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const FavoriteContainer = styled.div`
margin-top: 48px;
@media screen and (min-width: 768px) {
  margin-top: 74px;
}
@media screen and (min-width: 1440px) {
  margin-top: 100px;}
`;

export const FavoriteList = styled.ul`
  margin-bottom: 50px;
  li:last-child {
    margin-bottom: 0px;
  }
  @media screen and (min-width: 768px) {
    display: block !important;
    margin-top: 100px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 100px;
    display: block;
  }
`;

export const FavoriteTitle = styled.h2`
  padding-top: 50px;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -0.02em;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    padding-top: 72px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 44px;
    padding-top: 100px;
  }
`;

export const FavoriteItem = styled.li`
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
  }
`;