import React from "react";
import { Formik, Form, Field } from "formik";
import { dispatchSendMessage } from "../_services/Chat.actions";
import * as Yup from "yup";

const FormSendMessageComponent = ({ userName }) => {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={{
          userName: userName,
          message: "",
        }}
        onSubmit={(values, { resetForm }) => {
          dispatchSendMessage(values);
          resetForm();
        }}
        validationSchema={Yup.object({
          message: Yup.string().required("required !!!"),
        })}
      >
        {(props) => {
          return (
            <Form style={{ width: "90%" }}>
              <Field name={"userNme"} type={"hidden"} />
              <Field
                name={"message"}
                placeholder={"Type message..."}
                type={"text"}
                autoComplete="off"
              />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormSendMessageComponent;
