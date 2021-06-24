import { Button, FormGroup, InputGroup, Intent } from "@blueprintjs/core";
import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { dispatchRegisterUser } from "./User.actions";
import bg from "../../bg.jpg";

const RegisterComponent = () => {
  return (
    <div
      style={{
        background: `url(${bg}) no-repeat center`,
        height: "700px",
      }}
    >
      <h1 style={{ textAlign: "center", margin: 0 }}>Chat App</h1>
      <div style={{ display: "flex", margin: 30 }}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
              .email("Invalid email")
              .required("Email is required"),
            password: Yup.string().required("Password is required"),
            confirmPassword: Yup.string().oneOf(
              [Yup.ref("password"), null],
              "Passwords must match"
            ),
          })}
          onSubmit={(values) => {
            dispatchRegisterUser(values);
          }}
        >
          {(props) => {
            const { handleChange, handleSubmit, values } = props;
            return (
              <form onSubmit={handleSubmit}>
                <FormGroup label="Name" labelFor="name" labelInfo="(required)">
                  <InputGroup
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    type={"text"}
                  />
                  <ErrorMessage
                    name={"name"}
                    component={"div"}
                    style={{ color: "red" }}
                  />
                </FormGroup>
                <FormGroup
                  label="Email"
                  labelFor="email"
                  labelInfo="(required)"
                >
                  <InputGroup
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name={"email"}
                    component={"div"}
                    style={{ color: "red" }}
                  />
                </FormGroup>
                <FormGroup
                  label="Password"
                  labelFor="password"
                  labelInfo="(required)"
                >
                  <InputGroup
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    type={"password"}
                  />
                  <ErrorMessage
                    name={"password"}
                    component={"div"}
                    style={{ color: "red" }}
                  />
                </FormGroup>
                <FormGroup
                  label="Confirm password"
                  labelFor="confirmPassword"
                  labelInfo="(required)"
                >
                  <InputGroup
                    id="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    type={"password"}
                  />
                  <ErrorMessage
                    name={"confirmPassword"}
                    component={"div"}
                    style={{ color: "red" }}
                  />
                </FormGroup>
                <Button
                  type={"submit"}
                  text={"Sign In"}
                  intent={Intent.SUCCESS}
                />
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterComponent;
