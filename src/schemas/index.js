import * as yup from "yup";

const phoneRegExp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

export const userFormSchema = yup.object().shape({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    username: yup.string().required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    
    phone: yup.string().matches(phoneRegExp, "phone number is not valid. it requires 10 numbers").required("Required"),
    password: yup.string().min(5).required("Required")
});