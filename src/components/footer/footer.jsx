import React from 'react';
import { Nav } from './navigation/nav';
import { FollowUs } from './social_media/followUs';
import { SubscribeForm } from './subscribe_form/subscribeForm'; 
const Footer = () => {
  return (
   <div>
          <p>So Yummy</p>
        <ul>
          <li>Database of recipes that can be replenished</li>
          <li>Flexible search for desired and unwanted ingredients</li>
          <li>Ability to add your own recipes with photos</li>
          <li>Convenient and easy to use</li>
        </ul>
      
      <Nav/>

      <FollowUs />

      <SubscribeForm />

      <p>© 2023 All Rights Reserved. Terms of Service</p>
    </div>
  );
};

export default Footer;