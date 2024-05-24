import React from 'react'
import { useParams } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Helmet } from 'react-helmet-async';
import { useState,useEffect } from 'react';
function Uptade() {

  useEffect(() => {
    datas()
  }, [])


  const [mydata, setmydata] = useState(null)

  const { id } = useParams()
  async function getAllproducts() {
    const res = await fetch('http://localhost:3000/products/' + id)
    const data = await res.json()
    return data
  }


  async function datas() {
    const dataByid = await getAllproducts(id)
    setmydata(dataByid)
  }





  return (
    <>
      <Helmet>
        <title>Murad Adizade</title>
        <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWJDZV3t91JPg_6M7rFojFC-lGzpyGW9XxKxJcMIGuw&s" />
      </Helmet>
     {
      mydata &&  <Formik
      initialValues={{ image: mydata.image, title: mydata.title, text: mydata.text }}
      validationSchema={Yup.object({
        image: Yup.string()
          .required('Required'),
        title: Yup.string()
          .required('Required'),
        text: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          fetch('http://localhost:3000/products/' + id, {
            method: 'put', headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            }, body: JSON.stringify({image: values.image, title: values.title, text: values.text})
          })
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="image">image</label>
        <Field name="image" type="text" />
        <ErrorMessage name="image" />

        <label htmlFor="title">Last Name</label>
        <Field name="title" type="text" />
        <ErrorMessage name="title" />

        <label htmlFor="text">text </label>
        <Field name="text" type="text" />
        <ErrorMessage name="text" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
     }

    </>)
}

export default Uptade