import React, { useState } from "react";
import { login, signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import FormInput from "../../components/form-input/formInput.component";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  SignInTitle,
  ButtonsBarContainer,
  SignInContainer,
  LinksContainer,
} from "./login.styled";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../utils.js";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { email, password } = userCredentials;

  const handleChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  ///submit form
  const submitForm = data => {
    login(email, password)
      .then(res => {
        console.log(res);
        navigate(location.state?.from ?? "/");
      })
      .catch(error => console.log(error.message));
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an Account</SignInTitle>
      <span>sign in with your email and password</span>
      <form onSubmit={handleSubmit(submitForm)}>
        <FormInput
          name="email"
          type="text"
          label="email"
          value={email}
          handleChange={handleChange}
          Register={register}
        />
        <p>{errors.email?.message}</p>
        <FormInput
          name="password"
          label="password"
          type="password"
          value={password}
          Register={register}
          handleChange={handleChange}
        />
        <p>{errors.password?.message}</p>
        <LinksContainer>
          <Link to="/forget-password">Forget Password ?</Link>
          <Link to="/register">Register</Link>
        </LinksContainer>
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            onClick={() =>
              signInWithGoogle()
                .then(user => {
                  console.log(user);
                })
                .catch(e => console.log(e.message))
            }
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
