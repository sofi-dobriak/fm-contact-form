import { Formik, Form, Field } from 'formik';
import styles from './Form.module.css';
import * as Yup from 'yup';

const ContactForm = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        query: '',
        message: '',
        agree: false,
    };

    const handleSubmit = (values, options) => {
        console.log(values);
        options.resetForm();
    };

    const validationSchema = Yup.object().shape({});

    return (
        <div className={styles.formWrapper}>
            <h1 className={styles.title}>Contact Us</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <Form className={styles.form}>
                    <div className={styles.nameContainer}>
                        <label className={styles.label}>
                            <div className={styles.labelStarContainer}>
                                <span>First Name </span>
                                <span className={styles.star}>*</span>
                            </div>
                            <Field className={styles.input} type='text' name='firstName' />
                        </label>
                        <label className={styles.label}>
                            <div className={styles.labelStarContainer}>
                                <span>Last Name</span>
                                <span className={styles.star}>*</span>
                            </div>
                            <Field className={styles.input} type='text' name='lastName' />
                        </label>
                    </div>
                    <label className={styles.label}>
                        <div className={styles.labelStarContainer}>
                            <span>Email Address</span>
                            <span className={styles.star}>*</span>
                        </div>
                        <Field
                            className={`${styles.input} ${styles.emailInput}`}
                            type='email'
                            name='email'
                        />
                    </label>
                    <div className={styles.labelStarContainer}>
                        <span>Query Type </span>
                        <span className={styles.star}>*</span>
                    </div>
                    <div className={styles.radioContainer}>
                        <label className={styles.radioLabel}>
                            <Field
                                className={styles.radioInput}
                                type='radio'
                                value='general'
                                name='query'
                            />
                            General Enquiry
                        </label>
                        <label className={styles.radioLabel}>
                            <Field
                                className={styles.radioInput}
                                type='radio'
                                value='support'
                                name='query'
                            />
                            Suppoty request
                        </label>
                    </div>
                    <label className={styles.label}>
                        <div className={styles.labelStarContainer}>
                            <span>Message</span>
                            <span className={styles.star}>*</span>
                        </div>
                        <Field className={styles.textarea} as='textarea' name='message' />
                    </label>
                    <label className={styles.checkLabel}>
                        <Field className={styles.checkInput} type='checkbox' name='agree' />
                        <div>
                            <span>I consest to being contacted by the team</span>
                            <span className={styles.star}>*</span>
                        </div>
                    </label>
                    <button className={styles.button} type='submit'>
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;
