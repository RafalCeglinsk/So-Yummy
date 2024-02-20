import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, register } from "../../redux/auth/operations";

import { Form, StyledLink } from "./AuthForm.styled";

export const AuthForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const location = useLocation().pathname;

  const handleChangeInput = (event) => {
    const input = event.target;

    input.name === "name" && setName(input.value);
    input.name === "email" && setEmail(input.value);
    input.name === "password" && setPassword(input.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (location === "/auth/register") {
      if (name === "" || email === "" || password === "") return;
      dispatch(register({ name, email, password }));
    }

    if (location === "/auth/login") {
      if (email === "" || password === "") return;
      dispatch(login({ email, password }));
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <h2>{location === "/auth/login" ? "Sign In" : "Registration"}</h2>
      {location === "/auth/register" && (
        <label>
          <span>Name</span>
          <input
            label="Name"
            name="name"
            type="text"
            value={name}
            onChange={handleChangeInput}
            required
          />
        </label>
      )}
      <label>
        <span>Email</span>
        <input
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleChangeInput}
          required
        />
      </label>
      <label>
        <span>Password</span>
        <input
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={handleChangeInput}
          minLength={7}
          required
        />
      </label>
      <button type="submit">
        {location === "/auth/register" ? "Sign up" : "Sign In"}
      </button>
      {location === "/auth/login" ? (
        <StyledLink to="/auth/register">Sign up</StyledLink>
      ) : (
        <StyledLink to="/auth/login">Sign in</StyledLink>
      )}
    </Form>
  );
};
