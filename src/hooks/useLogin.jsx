import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import loginApi from "../services/loginApi";
import Swal from "sweetalert2";

const useLogin = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(5, "Minimum 5 characters"),
    }),
    onSubmit: async (values) => {
      const email = values.email;
      const password = values.password;

      try {
        const token = await loginApi(email, password);
        await sessionStorage.setItem("token", token);
        await navigate("/");
      } catch (error) {
        Swal.fire("Invalid credentials, try again");
      }
    },
  });
  return formik;
};

export default useLogin;
