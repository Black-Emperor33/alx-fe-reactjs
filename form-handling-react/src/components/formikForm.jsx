import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = (values) => {
    console.log("Formik User Registration:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <h2>Formik Registration</h2>

        <Field name="username" placeholder="Username" />
        <ErrorMessage name="username" component="div" style={{ color: "red" }} />

        <Field name="email" type="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" style={{ color: "red" }} />

        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" style={{ color: "red" }} />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
