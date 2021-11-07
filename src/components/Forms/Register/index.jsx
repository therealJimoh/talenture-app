import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, FormWrapper } from "./style";
import { Formik, Form, Field, ErrorMessage } from "formik";
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

  return (
    <>
      <Container>
        <h1> Sign Up</h1>
        <FormWrapper>
          <span className="formError">{error ? error : ""}</span>
          <span className="formSuccess">{success ? success : ""}</span>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              <div className="formControl">
                <label htmlFor="firstname">First Name</label>
                <Field type="text" className="first_name" name="first_name" />
                <ErrorMessage name="first_name" />
              </div>
              <div className="formControl">
                <label htmlFor="lastname">Last Name</label>
                <Field type="text" className="last_name" name="last_name" />
                <ErrorMessage name="last_name" />
              </div>
              <div className="formControl">
                <label htmlFor="brandname">Brand Name</label>
                <Field type="text" className="brand_name" name="brand_name" />
                <ErrorMessage name="brand_name" />
              </div>
              <div className="formControl">
                <label htmlFor="email">Email</label>
                <Field type="email" className="email" name="email" />
                <ErrorMessage name="email" />
              </div>
              <div className="formControl">
                <label htmlFor="password">Password</label>
                <Field type="password" className="password" name="password" />
                <ErrorMessage name="password" />
              </div>
              <div className="formControl">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <Field
                  type="password"
                  className="confirm_password"
                  name="confirm_password"
                />
                <ErrorMessage name="confirm_password" />
              </div>

              <button type="submit"> Create Account </button>
            </Form>
          </Formik>
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
