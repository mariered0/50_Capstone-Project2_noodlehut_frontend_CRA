import * as yup from "yup";

export const signInSchema = yup.object().shape({
    username: yup.string().required("Required"),
    password: yup.string().min(5).required("Required")
});