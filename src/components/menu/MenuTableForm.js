import React, { useState } from "react"
//import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'

const MenuTableForm = (props) => {

  console.log(props)
  const onSubmit = (formValues) => {

    console.log(formValues)

    //props.onSubmit(formValues)
    console.log(props)

  }
  const required = value => (value ? undefined : 'Required')

  const renderError = ({ error, touched }) => {
    // console.log({ error, touched })
    if (touched && error) {
      return <span className="text-danger">{error}</span>
    }
  }

  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <br />
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={props.initialValues}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            className="btn btn-success"
            disabled={submitting || pristine}
          >
            +
          </button>

          <Field
            label="Item"
            name="item"
            component={renderInput}
            validate={required}
          />

          <Field
            label="Unit"
            name="unit"
            component={renderInput}
            validate={required}
          />

          <Field
            label="Price"
            name="price"
            component={renderInput}
            validate={required}
          />

        </form>
      )}
    />
  );
}

export default MenuTableForm
