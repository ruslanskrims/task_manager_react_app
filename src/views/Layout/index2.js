import React, { useState } from "react";
import styles from "./styles.module.scss";
import { FormikControl } from "./FormikControl";
import { Select1 } from "./Select1";
import { FieldRadioBtn } from "./FieldRadioBtn";
import { FieldRadioGroup } from "./FieldRadioGroup";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";

export const Layout = () => {
  //   const initialValues = {
  //     name: "SS",
  //     email: "",
  //     channel: "",
  //     comments: "",
  //     address: "",
  //     social: {
  //       facebook: "",
  //       twitter: "",
  //     },
  //     phoneNumbers: ["", ""],
  //     phNumbers: [""],
  //     // comments: Yup.string().required(`Required`),
  //   };

  //   const validationSchemaYup = Yup.object({
  //     name: Yup.string().required(`Required`),
  //     email: Yup.string().email(`Invalid email`).required(`Required`),
  //     channel: Yup.string().required(`Required`),
  //     comments: Yup.string().required(`Required`),
  //   });
  const dropdownOptions = [
    { key: "1", value: "" },
    { key: "2", value: "designer" },
    { key: "3", value: "programmer" },
    { key: "4", value: "doctor" },
  ];

  const radioOptions = [
    { key: "1", value: "" },
    { key: "2", value: "designer" },
    { key: "3", value: "programmer" },
    { key: "4", value: "doctor" },
  ];

  const initialValues = {
    email: "",
    descriptiom: "",
    selectOption: "",
    radioOption: "",
    sex: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required(`Email is required`),
    descriptiom: Yup.string().required(`Desc is required`),
    selectOption: Yup.string().required(`Option is required`),
    radioOption: Yup.string().required(`Option is required`),
    sex: Yup.string().required("Обязательно!"),
  });
  const onSubmit = (values) => {
    console.log(`Form data`, values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="textarea"
              label="Description"
              name="description"
            />
            {/* <FormikControl
              control="select"
              label="Select a topic"
              name="selectOption"
              options={dropdownOptions}
            /> */}
            <Select1 name="speciality" label="Специальность">
              <option value="">Выбрать</option>
              <option value="Дизайнер">Дизайнер</option>
              <option value="Разработчик">Разработчик</option>
              <option value="Проект-разработчик">Проект-менеджер</option>
            </Select1>
            <FieldRadioGroup title="Выберите пол">
              <FieldRadioBtn
                name="sex"
                id="male"
                value="male"
                checked={sex === "male" && "checked"}
              >
                Мужской
              </FieldRadioBtn>
              <FieldRadioBtn
                name="sex"
                id="female"
                value="female"
                checked={sex === "female" && "checked"}
              >
                Женский
              </FieldRadioBtn>
            </FieldRadioGroup>

            {/* <FormikControl
              control="radio"
              label="Radio Topic"
              name="radioOption"
              options={radioOptions}
            /> */}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
