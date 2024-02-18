import React, { useState } from 'react';
import {
  SubscribeFormContainer,
  EmailInput,
  SubscribeButton,
} from './subscribeForm.styled';

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidEmail(emailRegex.test(newEmail));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validEmail) {
      console.log('Wysyłanie formularza z adresem email:', email);
    } else {
      alert('Nieprawidłowy adres e-mail!');
    }
  };

  return (
    <SubscribeFormContainer onSubmit={handleSubmit}>
      <EmailInput
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={handleEmailChange}
      />
      <SubscribeButton type="submit" disabled={!validEmail}>
        Subscribe
      </SubscribeButton>
    </SubscribeFormContainer>
  );
};
