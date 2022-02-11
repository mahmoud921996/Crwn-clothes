import React from "react";
import {
  FormInputContainer,
  FormInputLabel,
  GroupContainer,
} from "./formInput.styled";

const FormInput = ({ handleChange, label, Register, name, ...props }) => {
  return (
    <GroupContainer>
      <FormInputContainer
        {...Register(name)}
        { ...props }
        onChange={handleChange}
      />
      {label ? (
        <FormInputLabel className={`${props.value.length ? "shrink" : ""}`}>
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
