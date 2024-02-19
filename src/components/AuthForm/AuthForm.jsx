import { Form } from "./AuthForm.styled";

import { useLocation } from "react-router-dom";

export const AuthForm = () => {
  const location = useLocation().pathname;
  return (
    <Form>
      <h2>{location === "/signin" ? "Sign In" : "Registration"}</h2>
      {location === "/register" && (
        <label>
          <span>Name</span>
          <input
            label="Name"
            name="name"
            type="text"
            //  value={name}
            //  onChange={handleChangeInput}
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
          //  value={email}
          //  onChange={handleChangeInput}
          required
        />
      </label>
      <label>
        <span>Password</span>
        <input
          label="Password"
          name="password"
          type="password"
          //   value={password}
          //   onChange={handleChangeInput}
          minLength={7}
          required
        />
      </label>
      <button type="submit">
        {location === "/register" ? "Sign up" : "Sign in"}
      </button>
    </Form>
  );
};
