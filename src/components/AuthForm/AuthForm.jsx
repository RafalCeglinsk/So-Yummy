import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, register } from "../../redux/auth/operations";

import mobileLogo from "../../images/AuthPage/mobileLogox1.png";
import mobileLogoRetina from "../../images/AuthPage/mobileLogox2.png";
import mobileBackground from "../../images/AuthPage/mobileBackgroundx1.png";
import mobileBackgroundRetina from "../../images/AuthPage/mobileBackgroundx2.png";

import tabletLogo from "../../images/AuthPage/tabletLogox1.png";
import tabletLogoRetina from "../../images/AuthPage/tabletLogox2.png";
import tabletBackground from "../../images/AuthPage/tabletBackgroundx1.png";
import tabletBackgroundRetina from "../../images/AuthPage/tabletBackgroundx2.png";

import desktopLogo from "../../images/AuthPage/desktopLogox1.png";
import desktopLogoRetina from "../../images/AuthPage/desktopLogox2.png";
import desktopBackground from "../../images/AuthPage/desktopBackgroundx1.png";
import desktopBackgroundRetina from "../../images/AuthPage/desktopBackgroundx2.png";

import {
  Background,
  Container,
  Desktop,
  Flex,
  Form,
  FormButton,
  H2,
  Logo,
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (location === "/auth/register") {
      if (name === "" || email === "" || password === "") return;
      dispatch(register({ name, email, password }));
    }

    if (location === "/auth/login") {
      if (email === "" || password === "") return;
      try {
        dispatch(login({ email, password }));
      } catch (error) {
        console.error("Błąd logowania:", error);
      }
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Flex>
        <Logo
          mobileimage={mobileLogo}
          mobileiretinaimage={mobileLogoRetina}
          tabletimage={tabletLogo}
          tabletretinaimage={tabletLogoRetina}
          desktopimage={desktopLogo}
          desktopretinaimage={desktopLogoRetina}
        />
        <Desktop>
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
            <StyledLink to="/auth/login">Sign up</StyledLink>
          ) : (
            <StyledLink to="/main">Sign in</StyledLink>
          )}
        </Desktop>
        <Background
          mobilebackground={mobileBackground}
          mobileiretinabackground={mobileBackgroundRetina}
          tabletbackground={tabletBackground}
          tabletretinabackground={tabletBackgroundRetina}
          desktopbackground={desktopBackground}
          desktopretinabackground={desktopBackgroundRetina}
        />
      </Flex>
    </Form>
  );
};
