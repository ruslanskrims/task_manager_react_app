import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { validation } from "./validationStudentYup";
import styles from "./styles.module.scss";

import { FieldRadioBtn, FieldRadioGroup, TextInput, Select } from "./Inputs";
export const Layout = () => {
  const [formValues, setFormValues] = useState(null);
  const savedValues = {
    firstName: "2",
    lastName: "3",
    age: 22,
    email: "2@gmail.com",
    sex: "",
    speciality: "",
    password: "",
    confirmPassword: "",
  };
  const initialValues = {
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    sex: "",
    speciality: "",
    password: "",
    confirmPassword: "",
  };

  const submitForm = (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  return (
    <div className={styles.form_container}>
      <h1>Student Registration</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={validation}
        validateOnBlur={false}
        validateOnChange={true}
        enableReinitialize={true}
      >
        {(formik) => {
          console.log(formik);
          const { values } = formik;
          const {
            firstName,
            lastName,
            age,
            sex,
            email,
            password,
            confirmPassword,
          } = values;
          return (
            <Form className={styles.form}>
              <TextInput
                label="Имя"
                name="firstName"
                type="text"
                placeholder="Имя"
                value={firstName}
              />
              <ErrorMessage name="firstName" />
              <TextInput
                label="Фамилия"
                name="lastName"
                type="text"
                placeholder="Фамилия"
                value={lastName}
              />
              <ErrorMessage name="lastName" />

              <TextInput
                label="Возраст"
                name="age"
                type="number"
                placeholder="Возраст"
                value={age}
              />
              <ErrorMessage name="age" />
              <TextInput
                label="E-mail"
                name="email"
                type="text"
                placeholder="E-mail"
                value={email}
              />
              <ErrorMessage name="email" />

              <FieldRadioGroup title="Пол">
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
              <ErrorMessage name="sex" />

              <Select options="select" name="speciality" label="Специальность">
                <option value="">Выбрать</option>
                <option value="Дизайнер">Дизайнер</option>
                <option value="Разработчик">Разработчик</option>
                <option value="Проект-разработчик">Проект-менеджер</option>
              </Select>

              <TextInput
                label="Пароль"
                name="password"
                type="password"
                placeholder="Пароль"
                value={password}
              ></TextInput>
              <ErrorMessage name="password" />

              <TextInput
                label="Подтвердить пароль"
                name="confirmPassword"
                type="password"
                placeholder="Подтвердить пароль"
                value={confirmPassword}
              ></TextInput>
              <ErrorMessage name="confirmPassword" />

              <button type="submit" onClick={() => setFormValues(savedValues)}>
                Сохранить данные
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
