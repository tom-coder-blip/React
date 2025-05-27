import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class UserForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Any place in your app!</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = {};
                        //validates email input field
                        if (!values.email) { //Checks if email is empty → shows "Required".
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) //Checks if email format is valid using a regular expression.
                        ) {
                            errors.email = 'Invalid email address';
                        } else if (values.email.length < 10) { //Checks if the email is at least 10 characters long.
                            errors.email = 'Email address too short';
                        }
                        if (!values.password) { //Checks if password is empty → shows "Required".
                            errors.password = 'Required';
                        } else if (values.password.length < 8) { //Checks if the password is at least 8 characters long.
                            errors.password = 'Password too short';
                        }
                        return errors;
                    }}
                    //once submit button has been clicked
                    //onsubmit runs after you click something
                    onSubmit={(values, { setSubmitting }) => {  //after submission values contains the data entered into the form.
                        //delays alert by 400ms
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false); //setSubmitting is used to control the submit state (true/false).
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field type="email" name="email" />
                            <span style={{ color:"red", fontWeight: "bold" }}>
                                <ErrorMessage name="email" component="div" />
                            </span>
                            <Field type="password" name="password" />
                            <span style={{ color:"red", fontWeight: "bold" }}>
                                <ErrorMessage name="password" component="div" />
                            </span>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        );
    }
}

export default UserForm;