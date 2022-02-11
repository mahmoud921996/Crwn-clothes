import React, { useState } from "react";

import CustomButton from "../../components/CustomButton/CustomButton.component";
import FormInput from "../../components/form-input/formInput.component";
import { forgotPassword } from "../../firebase/firebase.utils";
import {
  FormContainer,
  FormTitle,
  FormSpan,
  FormLink,
} from "./forget-password.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaForForget } from "../../utils.js";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const handleChange = e => {
    setEmail(e.target.value);
   
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaForForget),
  });

  const formSubmit = async () => {
  
    try {
      await forgotPassword(email);
      alert("we send an message at your email to reset password");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <FormContainer>
      <FormTitle>Forget Password</FormTitle>
      <form onSubmit={handleSubmit(formSubmit)}>
        <FormInput
          name="email"
          type="email"
          label="Email Address"
          value={email}
          handleChange={handleChange}
          Register={register}
        />
        <p>{errors.email?.message}</p>
        <CustomButton type="submit" style={{ margin: "auto" }}>
          Submit
        </CustomButton>
        <FormSpan>OR</FormSpan>
        <FormLink to="/Login">Login</FormLink>
      </form>
    </FormContainer>
  );
};

export default ForgetPassword;
