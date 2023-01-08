import *  as Yup  from 'yup'

export const singnUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  //   confirm_password: Yup.string()
  //     .required()
  //     .oneOf([Yup.ref("password"), null], "Password must match"),
  mobileNum: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    // .max(10)
    .required("A phone number is required"),
  username: Yup.string()
    .min(1, "Mininum 1 characters")
    .max(15, "Maximum 15 characters")
    // .test(
    //   "username",
    //   "This username has already been taken",
    //   function (username) {
    //     return checkAvailabilityUsername(username);
    //   }
    // )
    .required("You must enter a username"),
});