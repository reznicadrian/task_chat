import React from "react";
import "./Channel.style.css";
import { Button, Intent } from "@blueprintjs/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { dispatchCreateChanel } from "../_services/Chat.actions";
import * as Classes from "@blueprintjs/core/lib/cjs/common/classes";
import * as Yup from "yup";

const ChannelFormComponent = ({ userName }) => {
  return (
    <div className={"channel"}>
      <h1>Create Chanel</h1>
      <Formik
        initialValues={{
          channelId: 1111,
          userName: "",
          room: "",
        }}
        validationSchema={Yup.object({
          room: Yup.string().required("Chat name is required"),
        })}
        onSubmit={(values) => {
          dispatchCreateChanel(values);
        }}
      >
        {(props) => {
          const { dirty } = props;
          return (
            <Form>
              <Field name={"channelId"} type={"hidden"} autoComplete="off" />
              <Field
                placeholder={"username"}
                name={"userName"}
                type={"text"}
                autoComplete="off"
              />
              <ErrorMessage name={"userName"} />
              <Field
                placeholder={"chat name"}
                name={"room"}
                type={"text"}
                autoComplete="off"
              />
              <ErrorMessage name={"room"} />
              <Button
                intent={Intent.SUCCESS}
                type={"submit"}
                disabled={!dirty}
                text={"Create channel"}
                className={`bp3-fill bp3-outlined ${
                  dirty ? Classes.POPOVER_DISMISS : null
                }`}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ChannelFormComponent;
