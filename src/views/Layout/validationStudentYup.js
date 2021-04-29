import { string, number, ref, object } from "yup";

export const validation = object().shape({
  firstName: string().required("Обязательно!"),
  lastName: string().required("Обязательно!"),
  age: number()
    .integer()
    .min(14, "Слишко молод")
    .max(60, "Слишком старый")
    .required("Обязательно!"),
  email: string().email("Неверная почта").required("Обязательно!"),
  sex: string().required("Пол ввести Обязательно!"),
  speciality: string()
    .oneOf(
      ["Дизайнер", "Разработчик", "Проект-менеджер"],
      "Неправильная специальность"
    )
    .required("Обязательно"),
  password: string()
    .min(3, "Password is too short!")
    // .matches(
    //   /^(?=.*\d.*\d)(?=.*[^A-Za-z])/,
    //   "Password must be at least 2 digit characters long and contain Latin letters"
    // )
    .required("Password is required"),
  confirmPassword: string()
    .oneOf([ref("password")], "Passwords do not match")
    .required("Confirm password required"),
});
