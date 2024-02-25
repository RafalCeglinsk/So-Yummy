import React from 'react';
import { StyledIcon, FollowUsContainer } from './followUs.styled';

import { RenderFacebook, RenderYoutube, RenderTwitter, RenderInstargram } from '../../RenderSvg/RenderSvg';

export const FollowUs = () => {
  return (
    <FollowUsContainer>
      <a href="link-do-facebooka">
        <StyledIcon>
          <RenderFacebook />
        </StyledIcon>
      </a>
      <a href="link-do-youtube">
        <StyledIcon>
          <RenderYoutube />
        </StyledIcon>
      </a>
      <a href="link-do-twittera">
        <StyledIcon>
          <RenderTwitter />
        </StyledIcon>
      </a>
      <a href="link-do-instagrama">
        <StyledIcon>
          <RenderInstargram />
        </StyledIcon>
      </a>
    </FollowUsContainer>
  );
};