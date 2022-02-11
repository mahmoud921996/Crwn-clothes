import React, { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import FormInput from "../../components/form-input/formInput.component";
import { registerUser } from "../../firebase/firebase.utils";
import { SignUpContainer, SignUpTitle } from "./register.styled";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../utils.js";
const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const formSubmit = async () => {
    
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    registerUser(email, password)
      .then(res => {
        {
          console.log(res);
          navigate("/");
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  const { email, password, confirmPassword } = userCredentials;
  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit(formSubmit)}>
        <FormInput
          name="email"
          type="email"
          value={email}
          label="Email"
          handleChange={handleChange}
          Register={register}
        />
         <p>{errors.email?.message}</p>
        <FormInput
          name="password"
          type="password"
          value={password}
          label="Password"
          handleChange={handleChange}
          Register={register}
        />
         <p>{errors.password?.message}</p>
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          label="confirm password"
          handleChange={handleChange}
          Register={register}
        />
         <p>{errors.confirmPassword?.message}</p>
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
