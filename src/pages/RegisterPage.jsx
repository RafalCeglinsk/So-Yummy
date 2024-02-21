import { Helmet } from "react-helmet";
import { AuthForm } from "../components/AuthForm/AuthForm";

const RegisterPage = () => {
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <AuthForm />
    </div>
  );
};

export default RegisterPage;
