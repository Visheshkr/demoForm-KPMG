import * as Yup from 'yup';
var age_regex='/\s[0-1]{1}[0-9]{0,2}/';
export const FormValidation = Yup.object({
    name:Yup.string().min(3).required("Please Enter Your Name"),
    email:Yup.string().email("Please enter a valid email").required("Please enter email"),
    password:Yup.string().min(5).required("Please enter password"),
    confirm_password:Yup.string().oneOf([Yup.ref("password")],"Password Not matched").required("Please enter the confirm password"),
    age:Yup.string().matches(age_regex,"Please enter a valid age").required("Please enter your age")
})