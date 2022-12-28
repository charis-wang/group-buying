import React from "react"
//import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'

const MenuForm = () => {

  const onSubmit = (formValues) => {
    //props.onSubmit(formValues);
    console.log(formValues)
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


    <div className="mx-2">
      <Form
        onSubmit={onSubmit}
        initialValues={{}}

        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>

            <Field
              label="Shop"
              name="shop"
              component={renderInput}
              validate={required}
            />

            <div>
              <label>Type</label>
              <br />
              <Field
                name="shopType"
                component="select"
              >
                <option value="choose">Choose...</option>
                <option value="Drinks" >Drinks</option>
                <option value="Lunch" >Lunch</option>
                <option value="Dessert" >Dessert</option>
              </Field>
            </div>

            <Field
              label="Phone Number"
              name="phoneNumber"
              component={renderInput}
              validate={required}
            />

            <Field
              label="Address"
              name="address"
              component={renderInput}
              validate={required}
            />

            <div>
              <label>Notes</label>
              <br />
              <Field name="notes" component='textarea' placeholder="other info" />
            </div>
            <div className="buttons">
              <button
                type="submit"
                className="btn btn-success"
                disabled={submitting || pristine}
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-light"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      />
    </div>
  )
}

export default MenuForm