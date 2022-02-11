import * as yup from "yup";

export const schema = yup.object().shape({
  // firstName: yup.string().required("First Name should be required please"),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "confirm password must match"),
});

export const schemaForForget = yup.object().shape({
  // firstName: yup.string().required("First Name should be required please"),
  email: yup.string().email().required(),
});

export const schemaforReset = yup.object().shape({
  password: yup.string().min(4).max(15).required(),
});
