import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, FormWrapper } from "./style";
import { Formik, Form, Field, ErrorMessage } from "formik";
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

  return (
    <>
      <Container>
        <h1>Log in</h1>
        <FormWrapper>
          <span className="loginError">{error ? error : ""}</span>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
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

              <button type="submit"> Log in </button>
            </Form>
          </Formik>
        </FormWrapper>
        <h3>
          Don't have an account? <Link to="/signup">Sign up</Link>{" "}
        </h3>
      </Container>
    </>
  );
};

export default withRouter(Login);
