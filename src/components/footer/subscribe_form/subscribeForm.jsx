import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={handleEmailChange}
      />
      <button type="submit" disabled={!validEmail}>
        Subscribe
      </button>
    </form>
  );
};
