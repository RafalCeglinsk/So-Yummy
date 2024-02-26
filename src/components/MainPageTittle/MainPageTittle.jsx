import React from 'react';

import { MainTitle1,MainTitle2,MainTitle3 } from '../RenderSvg/RenderSvg';
import { Title } from './MainPageTitle.styled';

export const MainTitle = ({children}) => {
  return (
    <Title >
      <h2 >{children}</h2>
     <MainTitle1 className="circle"></MainTitle1>
      <MainTitle2 className='circle2'></MainTitle2>
      <MainTitle3 className='circle3'></MainTitle3>
    </Title>
  );
};
 