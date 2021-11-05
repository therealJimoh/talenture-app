import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, FormWrapper } from "./style";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const initialValues = {
  first_name: "",
  last_name: "",
  brand_name: "",
  email: "",
  password: "",
  confirm_password: "",
};

// const validate = (values) => {
//   let errors = {};

//   if (!values.first_name) {
//     errors.first_name = "This field is Required";
//   }
//   if (!values.last_name) {
//     errors.last_name = "This field is Required";
//   }
//   if (!values.brand_name) {
//     errors.brand_name = "This field is Required";
//   }
//   if (!values.email) {
//     errors.email = "This field is Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email format";
//   }
//   if (!values.password) {
//     errors.password = "This field is Required";
//   }
//   if (!values.confirm_password) {
//     errors.confirm_password = "This field is Required";
//   }

//   return errors;
// };

const validationSchema = Yup.object({
  first_name: Yup.string()
    .min(2, "Please enter your real name")
    .required("Input field is required"),
  last_name: Yup.string()
    .min(2, "Please enter your real name")
    .required("Input field is required"),
  brand_name: Yup.string()
    .min(2, "Please enter your brand name")
    .required("Input field is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: Yup.string()
    .min(8, "Password must be atleast 8 characters")
    .required("Input field is required"),
  confirm_password: Yup.string()
    .required("Please confirm password")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Password does not match"
      ),
    }),
});

const Signup = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (values, onSubmitProps) => {
    const { ...data } = values;

    const result = await axios
      .post("https://intaviewer-api.herokuapp.com/api/auth/register", data)
      .catch((err) => {
        if (err && err.response) {
          setSuccess(null);
          setError(err.response.data.error);
        }
      });

    if (result && result.data) {
      setError(null);
      setSuccess(result.data.message);
      onSubmitProps.resetForm();
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <>
      <Container>
        <h1> Sign Up</h1>
        <FormWrapper>
          <span className="formError">{error ? error : ""}</span>
          <span className="formSuccess">{success ? success : ""}</span>
          <form onSubmit={formik.handleSubmit}>
            <div className="formControl">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                className="first_name"
                name="first_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.first_name}
              />
              {formik.touched.first_name && formik.errors.first_name ? (
                <div className="errors">{formik.errors.first_name}</div>
              ) : null}
            </div>
            <div className="formControl">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                className="last_name"
                name="last_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.last_name}
              />
              {formik.touched.last_name && formik.errors.last_name ? (
                <div className="errors">{formik.errors.last_name}</div>
              ) : null}
            </div>
            <div className="formControl">
              <label htmlFor="brandname">Brand Name</label>
              <input
                type="text"
                className="brand_name"
                name="brand_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.brand_name}
              />
              {formik.touched.brand_name && formik.errors.brand_name ? (
                <div className="errors"> {formik.errors.brand_name}</div>
              ) : null}
            </div>
            <div className="formControl">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="errors">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="formControl">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="errors">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="formControl">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input
                type="password"
                className="confirm_password"
                name="confirm_password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirm_password}
              />
              {formik.touched.confirm_password &&
              formik.errors.confirm_password ? (
                <div className="errors">{formik.errors.confirm_password}</div>
              ) : null}
            </div>

            <button type="submit"> Create Account </button>
          </form>
        </FormWrapper>

        <h3>
          Already have an account?
          <Link to="/login" className="styledLink">
            Login
          </Link>
        </h3>
      </Container>
    </>
  );
};

export default Signup;
