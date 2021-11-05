import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, FormWrapper } from "./style";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { withRouter } from "react-router";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Input field is required"),
  password: Yup.string().required("Password is required"),
});

const Login = ({ isAuth, setIsAuth }) => {
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (isAuth) {
      history.push("/");
    }
  }, [isAuth, history]);

  const onSubmit = async (values) => {
    await axios
      .post("https://intaviewer-api.herokuapp.com/api/auth/login", values)
      .then(async (res) => {
        localStorage.setItem("userData", JSON.stringify(res.data));
        localStorage.setItem("token", res.data.token);
        await setIsAuth(true);
      })
      .catch((err) => {
        if (err && err.response) {
          setError(err.response.data.error);
        }
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <Container>
        <h1>Log in</h1>
        <FormWrapper>
          <span className="loginError">{error ? error : ""}</span>
          <form onSubmit={formik.handleSubmit}>
            <div className="formControl">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
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
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="errors">{formik.errors.password}</div>
              ) : null}
            </div>

            <button type="submit"> Log in </button>
          </form>
        </FormWrapper>
        <h3>
          Don't have an account? <Link to="/signup">Sign up</Link>{" "}
        </h3>
      </Container>
    </>
  );
};

export default withRouter(Login);
