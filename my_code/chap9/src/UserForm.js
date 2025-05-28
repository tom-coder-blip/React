// This React code defines a form component (UserForm) that allows users to add a new user or edit an existing user's 
// username and email. It uses Formik for form handling and Firebase Realtime Database for data storage.

import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

import { useParams } from 'react-router-dom';

class UserForm extends Component {
    title;
    id;

    constructor(props) {
        super(props);
        this.id = this.props.params.id;
        this.title = 'New User';
        this.state = { //Initializes state with empty username and email.
            username: '',
            email: '',
        };
        if (this.id) { //Checks if an id is passed via URL. If yes → it's Edit mode.
            this.title = 'Edit User'; //Sets the title accordingly (New User or Edit User).


        }
    }
    componentDidMount() {
        //If it's Edit mode (this.id exists), it fetches existing data from Firebase using the id.
        if (this.id) {
            firebase.database().ref('/' + this.id)
            //It updates the component state with the fetched data.
                .on('value', snapshot => {
                    this.setState({
                        username: snapshot.val().username,
                        email: snapshot.val().email,
                    });
                });
        }
    }
    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                <Formik
                    enableReinitialize={true} // Ensures the form updates when state changes (important when loading data).
                    initialValues={{  // Sets the starting values of the form fields.
                        username: this.state.username,
                        email: this.state.email
                    }} 
                    //Validation Logic
                    validate={values => {
                        let errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        else if (values.email.length < 10) {
                            errors.email = 'Email address too short';
                        }

                        if (!values.username) {
                            errors.username = 'Required';
                        }
                        else if (values.username.length < 3) {
                            errors.username = 'username too short';
                        }
                        return errors;
                    }}

                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            // actual submit logic... 
                            if (this.id) {
                                firebase.database().ref('/' + this.id).update({ //If editing: Updates the record in Firebase.
                                    username: values.username,
                                    email: values.email
                                }).then(() => window.location.href = ("/"));
                            }
                            else {
                                firebase.database().ref('/').push({ //If adding new: Creates a new record.
                                    username: values.username,
                                    email: values.email
                                }).then(() => window.location.href = ("/")); //Then redirects to the homepage.
                            }

                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (

                        //Two fields: email and username.
                        //Displays error messages below each field.
                        <Form>
                            <Field type="email" name="email" />
                            <span style={{ color: "red", fontWeight: "bold" }}>
                                <ErrorMessage name="email" component="div" />
                            </span>
                            <Field type="text" name="username" />
                            <span style={{ color: "red", fontWeight: "bold" }}>
                                <ErrorMessage name="username" component="div" />
                            </span>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div >
        )
    }
}



export default (props) => (
    < UserForm
        {...props}
        params={useParams()}
    />
);