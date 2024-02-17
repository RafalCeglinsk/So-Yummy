import React from 'react';
import { RenderFacebook, RenderYoutube, RenderTwitter, RenderInstargram } from '../../RenderSvg/RenderSvg';

export const FollowUs = () => {
  return (
    <div className="follow-us">
      <a href="link-do-facebooka">
        <RenderFacebook />
      </a>
      <a href="link-do-youtube">
        <RenderYoutube />
      </a>
      <a href="link-do-twittera">
        <RenderTwitter />
      </a>
      <a href="link-do-instagrama">
        <RenderInstargram />
      </a>
    </div>
  );
};
