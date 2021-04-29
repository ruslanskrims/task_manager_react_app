import { string, object, array, mixed, boolean, date } from "yup";
import { availableTags } from "../../availableTags";
export const validationSchema = object().shape({
  title: string().max(70, "Слишком длинное название").required("Обязательно!"),
  description: string().max(255, "Слишком длинное описание").required("Обязательно для заполнения!"),
  deadline: date().required("Обязательно для заполнения").nullable(),
  box: boolean(),
  tag: mixed()
    .oneOf(availableTags, "Tag type is invalid")
    .required("Task tag field is required"),
});
