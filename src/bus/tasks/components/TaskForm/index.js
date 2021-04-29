import React from "react";
import styles from "./styles.module.scss";
import { Formik, Form, ErrorMessage } from "formik";
import { validationSchema } from "./YupValidation";
import { InputField, Checkbox, Tag } from "../../assets";
import { availableTags } from "../../availableTags";
import { useCheckboxToggle, useManageTask} from "../../hooks";
import cx from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { taskActions } from "../../actions";
import { CustomDatePicker } from "../../assets/CustomDatePicker";
import {isEmptyObject} from '../../../../helpers/isEmptyObject';

export const TaskForm = ({ isOpenned }) => {
  const dispatch = useDispatch();
  const { selectedTask } = useSelector(
    (state) => state.taskList
  );
  const initialValues = {
    title: "",
    description: "",
    deadline: "",
    tag: "",
    completed: false,
  };

  const { box, toggleCheckBox } = useCheckboxToggle();
  const { saveTask } = useManageTask();

  const submitForm = (values, {resetForm}) => {
    console.log(values);
    saveTask(values);
    resetForm();
  };
  const formCn = cx(styles.form, {
    [styles.editorOpened]: isOpenned === true,
    [styles.editorClosed]: isOpenned === false,
  });

  return (
    <>
      <div className={formCn}>
        <Formik
          initialValues={isEmptyObject(selectedTask) ? initialValues  : selectedTask}
          onSubmit={submitForm}
          validationSchema={validationSchema}
          enableReinitialize={true}
        >
          {(props) => {
            const {
              values,
              handleChange,
              getFieldProps,
              setFieldValue,
              setValues,
            } = props;
            const { title, description, deadline, completed } = values;
            const setTag = (tag) => {
              setFieldValue("tag", tag);
            };
            const tagsCn = cx(styles.tags, {
              [styles.tags__selected]: selectedTask.length ? selectedTask.tag.name : ""
            });
            const tagsJSX =
              availableTags &&
              availableTags.map((tag, index) => (
                <Tag
                type={tag}
                key={index}
                cb={setTag}
                selected={values && values.tag === tag}
                name={!isEmptyObject(selectedTask) ? selectedTask.tag.name : ""}
                />
              ));

            const completeTask = () => {
              toggleCheckBox();
              setValues({
                ...values,
                completed: !values.completed,
              });
            };

            return (
              <Form>
                <div className={styles.complete}>
                  <div className={styles.completed}>
                    <Checkbox
                      isChecked={completed}
                      value={completed}
                      onClick={completeTask}
                      label="Mark as complete"
                    />
                  </div>
                </div>
                <div className={styles.formInputs}>
                  <InputField
                    name="title"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="title" />
                  <CustomDatePicker
                   type="text"
                   name="deadline"
                   label="Due to"
                   placeholder="Select the deadline date"
                   value={deadline}
                   setFieldValue={setFieldValue}
                    />
                  <ErrorMessage name="deadline" />
                  <InputField
                    label="Description"
                    name="description"
                    type="text"
                    placeholder="Описание"
                    value={description}
                    onChange={handleChange}
                  />
                  {tagsJSX}
                </div>
                <button  className={styles.button}>
                    {!isEmptyObject(selectedTask) ? "Обновить информацию" : "Создать"}
                </button>
                {!isEmptyObject(selectedTask) && (
                  <button  className={styles.button}>
                    Удалить
                  </button>
                )}
               
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};
