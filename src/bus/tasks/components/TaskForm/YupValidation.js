import { string, object, array, mixed, boolean, date } from "yup";
import { availableTags } from "../../availableTags";
export const validationSchema = object().shape({
  title: string()
    .min(3, "Title must be at least 3 characters")
    .max(60, "The title is too long")
    .required("Title is required!"),
  description: string()
    .min(10, "Decription is too small")
    .max(255, "The desctiption is too long")
    .required("Description is required!"),
  deadline: date().required("Deadline date is required!").nullable(),
  box: boolean(),
  tag: mixed()
    .oneOf(availableTags, "Tag type is invalid")
    .required("Tag is required"),
});
