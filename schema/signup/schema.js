import * as yup from "yup";

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid Email!")
    .required("Please enter Email!"),
  fullName: yup.string().required("Please enter Full name!"),
  userName: yup.string().required("Please enter Username!"),
  password: yup
    .string()
    .min(5, "Please enter valid Password!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Please enter Password!"),
});
