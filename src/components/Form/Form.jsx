import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './Form.module.css';
import * as Yup from 'yup';
import { useId } from 'react';

const ContactForm = ({ toggleModal }) => {
    const firstNameID = useId();
    const lastNameID = useId();
    const emailID = useId();
    const messageID = useId();
    const agreeID = useId();

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        query: 'general',
        message: '',
        agree: false,
    };

    const handleSubmit = (values, options) => {
        console.log(values);
        options.resetForm();
        toggleModal();
    };

    const getBordersColor = (name, touched, errors) => {
        if (!touched[name]) return '';
        return errors[name] ? styles.errorBorder : styles.successBorder;
    };

    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Minimum 2 chars')
            .max(20, 'Max 20 chars')
            .required('This field is required'),
        lastName: Yup.string()
            .min(2, 'Minimum 2 chars')
            .max(20, 'Max 20 chars')
            .required('This field is required'),
        email: Yup.string()
            .matches(re, 'Please enter a valid email')
            .required('This field is required'),
        message: Yup.string()
            .min(2, 'Minimum 2 chars')
            .max(100, 'Max 100 chars')
            .required('This field is required'),
        agree: Yup.boolean()
            .oneOf([true], 'To submit this form, please consent to being contacted')
            .required(),
    });

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Contact Us</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {({ errors, touched }) => (
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
                                    className={`${styles.nameInput} ${getBordersColor(
                                        'firstName',
                                        touched,
                                        errors
                                    )}`}
                                />
                                <ErrorMessage name='firstName' component='span' className='error' />
                            </div>
                            <div className={styles.labelInputNameContainer}>
                                <label htmlFor={lastNameID}>
                                    Last Name <span>*</span>
                                </label>
                                <Field
                                    type='text'
                                    name='lastName'
                                    id={lastNameID}
                                    className={`${styles.nameInput} ${getBordersColor(
                                        'lastName',
                                        touched,
                                        errors
                                    )}`}
                                />
                                <ErrorMessage name='lastName' component='span' className='error' />
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
                                className={`${styles.emailInput} ${getBordersColor(
                                    'email',
                                    touched,
                                    errors
                                )}`}
                            />
                            <ErrorMessage name='email' component='span' className='error' />
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
                                    checked
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
                                className={`${styles.textArea} ${getBordersColor(
                                    'message',
                                    touched,
                                    errors
                                )}`}
                            />
                            <ErrorMessage
                                name='message'
                                component='span'
                                className={`error ${styles.messageError}`}
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
                            <ErrorMessage
                                name='agree'
                                component='span'
                                className={`error ${styles.agreeError}`}
                            />
                        </div>

                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;
