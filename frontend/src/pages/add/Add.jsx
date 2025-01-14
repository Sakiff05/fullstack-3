import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router";

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number().min(2, "Too cheap!").required("Required"),
  image: Yup.string().url().required("Required"),
});
export default function Add() {
  const navigate = useNavigate();
  return (
    <div className="py-80 px-48">
      <Formik
        initialValues={{
          title: "",
          price: "",
          image: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          axios
            .post("http://localhost:5000/products", values)
            .then(() => navigate(-1));
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-5">
            <Field
              name="title"
              className="border rounded p-2"
              placeholder="Title"
            />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
            <Field
              name="price"
              className="border rounded p-2"
              placeholder="Price"
            />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}
            <Field
              name="image"
              className="border rounded p-2"
              placeholder="Image"
            />
            {errors.image && touched.image ? <div>{errors.image}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
