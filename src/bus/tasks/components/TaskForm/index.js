import React from "react";
import styles from "./styles.module.scss";
import { Formik, Form, ErrorMessage } from "formik";
import { validationSchema } from "./YupValidation";
import { InputField, Checkbox, Tag, CustomTextArea } from "../../assets";
import { availableTags } from "../../availableTags";
import { useManageTask } from "../../hooks";
import cx from "classnames";
import "./styles.scss";
import { useSelector } from "react-redux";
import { CustomDatePicker } from "../../assets/CustomDatePicker";
import { isEmptyObject } from "../../../../helpers/isEmptyObject";
import { CSSTransition } from "react-transition-group";

export const TaskForm = ({ isOpenned }) => {
  const { selectedTask } = useSelector((state) => state.taskList);
  const initialValues = {
    title: "",
    description: "",
    deadline: "",
    tag: "",
    completed: false,
  };

  const { saveTask, deleteTask, updateTask } = useManageTask();

  const submitForm = (values, { resetForm }) => {
    saveTask(values);
    resetForm();
  };
  const updateForm = (task) => {
    updateTask(task);
  };
  const formCn = cx(styles.form, {
    [styles.editorOpened]: isOpenned === true,
    [styles.editorClosed]: isOpenned === false,
  });

  return (
    <>
      <CSSTransition
        in={isOpenned === true}
        timeout={1000}
        classNames="taskform"
      >
        <div className={formCn}>
          <Formik
            initialValues={
              isEmptyObject(selectedTask) ? initialValues : selectedTask
            }
            onSubmit={isEmptyObject(selectedTask) ? submitForm : updateForm}
            validationSchema={validationSchema}
            enableReinitialize={true}
          >
            {(props) => {
              const { values, handleChange, setFieldValue, setValues } = props;
              const { title, description, deadline, completed } = values;
              const setTag = (tag) => {
                setFieldValue("tag", tag);
              };
              const tagsJSX =
                availableTags &&
                availableTags.map((tag, index) => (
                  <Tag
                    type={tag}
                    key={index}
                    cb={setTag}
                    selected={values.tag === tag}
                    name={
                      !isEmptyObject(selectedTask)
                        ? selectedTask.tag.name
                        : values.tag
                    }
                  />
                ));

              const completeTask = () => {
                setValues({
                  ...values,
                  completed: !values.completed,
                });
              };

              const removeTask = (id) => {
                if (!isEmptyObject(id)) {
                  return deleteTask(id);
                }
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
                        onChange={handleChange}
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
                    <CustomDatePicker
                      type="text"
                      name="deadline"
                      label="Due to"
                      placeholder="Select the deadline date"
                      value={deadline}
                      setFieldValue={setFieldValue}
                      onChange={handleChange}
                    />
                    <CustomTextArea
                      label="Description"
                      name="description"
                      type="text"
                      placeholder="Description"
                      value={description}
                      onChange={handleChange}
                    />
                    <div className={styles.tag__container}>{tagsJSX}</div>
                    <span className={styles.error__message}>
                      <ErrorMessage name="tag" />
                    </span>
                    <div className={styles.button__container}>
                      {isEmptyObject(selectedTask) && (
                        <button className={styles.button} type="submit">
                          Create
                        </button>
                      )}
                      {!isEmptyObject(selectedTask) && (
                        <>
                          <button
                            className={styles.button}
                            onClick={() => removeTask(selectedTask.id)}
                            type="button"
                          >
                            Delete
                          </button>
                          <button
                            type="button"
                            className={styles.button}
                            onClick={() => updateForm(values)}
                          >
                            Update
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </CSSTransition>
    </>
  );
};
