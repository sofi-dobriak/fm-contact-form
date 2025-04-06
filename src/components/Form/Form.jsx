import { Formik, Form, Field } from 'formik';
import styles from './Form.module.css';
import * as Yup from 'yup';
import { useId, useState } from 'react';

const ContactForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        query: '',
        message: '',
        agree: false,
    };

    const firstNameID = useId();
    const lastNameID = useId();
    const emailID = useId();
    const messageID = useId();
    const agreeID = useId();

    const handleSubmit = (values, options) => {
        console.log(values);
        options.resetForm();
    };

    const validationSchema = Yup.object().shape({});

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Contact Us</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <Form>
                    <div className={styles.nameContainer}>
                        <div className={styles.labelInputNameContainer}>
                            <label htmlFor={firstNameID}>
                                First Name <span>*</span>
                            </label>
                            <Field
                                type='text'
                                name='firstName'
                                id={firstNameID}
                                className={styles.nameInput}
                            />
                        </div>
                        <div className={styles.labelInputNameContainer}>
                            <label htmlFor={lastNameID}>
                                Last Name <span>*</span>
                            </label>
                            <Field
                                type='text'
                                name='lastName'
                                id={lastNameID}
                                className={styles.nameInput}
                            />
                        </div>
                    </div>

                    <div className={styles.labelInputEmailContainer}>
                        <label htmlFor={emailID}>
                            Email Address <span>*</span>
                        </label>
                        <Field
                            type='email'
                            name='email'
                            id={emailID}
                            className={styles.emailInput}
                        />
                    </div>

                    <p className={styles.queryTitle}>
                        Query Type <span>*</span>
                    </p>
                    <div className={styles.radioContainer}>
                        <label className={styles.radioLabel}>
                            <Field
                                type='radio'
                                value='general'
                                name='query'
                                className={`${styles.radioInput} visuallyHidden`}
                            />
                            <span className={styles.customRadio}></span>
                            <span className={styles.radioLabelText}>General Enquiry</span>
                        </label>
                        <label className={styles.radioLabel}>
                            <Field
                                type='radio'
                                value='support'
                                name='query'
                                className={`${styles.radioInput} visuallyHidden`}
                            />
                            <span className={styles.customRadio}></span>
                            <span className={styles.radioLabelText}>Support request</span>
                        </label>
                    </div>

                    <div className={styles.labelInputMessageContainer}>
                        <label htmlFor={messageID}>
                            Message <span>*</span>
                        </label>
                        <Field
                            as='textarea'
                            name='message'
                            id={messageID}
                            className={styles.textArea}
                        />
                    </div>

                    <div className={styles.labelInputCheckBoxContainer}>
                        <label htmlFor={agreeID} className={styles.checkboxLabel}>
                            <Field
                                type='checkbox'
                                name='agree'
                                id={agreeID}
                                className={`${styles.checkbox} visuallyHidden`}
                            />
                            <span className={styles.checkboxBorder}></span>I consent to being
                            contacted by the team <span>*</span>
                        </label>
                    </div>

                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;
