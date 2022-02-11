import React, { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import FormInput from "../../components/form-input/formInput.component";
import { resetPassword } from "../../firebase/firebase.utils";
import { FormContainer, FormTitle } from "./reset-password.styled";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaforReset } from "../../utils.js";
import { useNavigate, useLocation } from "react-router-dom";

// A custom hook that builds on uselocation to parse
// the query string for you.
const useQuery = location => {
  return new URLSearchParams(location.search);
};
const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaforReset),
  });

  const query = useQuery(location);
  const [password, setPassword] = useState("");

  const formSubmit = async () => {
  
    try {
      await resetPassword(query.get("oobCode"), password);
      alert("clicked");
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  // console.log(query.get("mode"), query.get("oobCode"));

  return (
    <FormContainer>
      <FormTitle>Reset Password</FormTitle>
      <form onSubmit={handleSubmit(formSubmit)}>
        <FormInput
          name="password"
          label="New Password"
          type="password"
          value={password}
          handleChange={e => setPassword(e.target.value)}
          Register={register}
        />
         <p>{errors.password?.message}</p>
        <CustomButton style={{ margin: "auto" }} type="submit">
          Reset Password
        </CustomButton>
      </form>
    </FormContainer>
  );
};

export default ResetPassword;
