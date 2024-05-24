import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';
function Add() {
  return (
    <>
     <Helmet>
        <title>Murad Adizade</title>
        <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWJDZV3t91JPg_6M7rFojFC-lGzpyGW9XxKxJcMIGuw&s" />
      </Helmet>
      <Formik
        initialValues={{ image: '', title: '', text: '' }}
        validationSchema={Yup.object({
          image: Yup.string()
            .required('Required'),
          title: Yup.string()
            .required('Required'),
          text: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            async function AddProducts() {
              const res = await fetch('http://localhost:3000/products', {
                method: 'post', headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                }, body: JSON.stringify(values)
              },)
              const data = await res.json()
            }
            AddProducts()
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="image">image</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="text">text </label>
          <Field name="text" type="text" />
          <ErrorMessage name="text" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}

export default Add