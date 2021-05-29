import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup.string().required("Please enter Username!"),
  password: yup
    .string()
    .min(5, "Please enter valid Password!")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // )
    .required("Please enter Password!"),
});
