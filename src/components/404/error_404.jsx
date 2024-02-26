import React from 'react';
import Footer from '../footer/footer';
import { ErrorContainer, ErrorImage, ErrorText, ErrorHeading } from './error_404.styled';
import error404 from '../../images/404/error404.jpg';

const Error404 = () => {
  return (
    <>
      <ErrorContainer>
        <ErrorImage src={error404} alt="Error404" />
        <ErrorHeading>Przepraszamy</ErrorHeading>
        <ErrorText>Strona nie została odnaleziona.</ErrorText>
      </ErrorContainer>
      <Footer />
    </>
  );
};

export default Error404;