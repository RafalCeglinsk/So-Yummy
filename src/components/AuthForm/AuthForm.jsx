import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, register } from "../../redux/auth/operations";

import {
  Container,
  Form,
  FormButton,
  H2,
  StyledInput,
  StyledLabel,
  StyledLink,
} from "./AuthForm.styled";

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
      <Container>
        <H2>{location === "/auth/login" ? "Sign In" : "Registration"}</H2>
        {location === "/auth/register" && (
          <StyledLabel>
            <StyledInput
              label="Name"
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleChangeInput}
              required
            />
          </StyledLabel>
        )}
        <StyledLabel>
          <StyledInput
            label="Email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChangeInput}
            required
          />
        </StyledLabel>
        <StyledLabel>
          <StyledInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleChangeInput}
            minLength={7}
            required
          />
        </StyledLabel>
        <FormButton type="submit">
          {location === "/auth/register" ? "Sign up" : "Sign In"}
        </FormButton>
      </Container>
      {location === "/auth/login" ? (
        <StyledLink to="/auth/register">Sign up</StyledLink>
      ) : (
        <StyledLink to="/auth/login">Sign in</StyledLink>
      )}
    </Form>
  );
};
