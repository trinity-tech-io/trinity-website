import React from 'react';
import ConicGradiSection from '../../components/ConicGradiSection';
import {Formik, Form, Field} from "formik";
import * as Yup from 'yup';

const Contact = () => {
    const DisplayingErrorMessageSchema = Yup.object().shape({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string().max(200, 'Must be 200 characters or less').required('Required'),
    })

    const MyInput = ({field, form, ...props}) => {
        return (
            <textarea rows={10}  className="form-control" {...field} {...props} />
        )
    };

    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        <>
            <ConicGradiSection title="Contact us"/>
            <section className="section pt-4" id="contact">
                <div className="container padding-t-30" style={{maxWidth: 800}}>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            message: ''
                        }}
                        onSubmit={ (values) => {handleSubmit(values)} }
                        validationSchema={DisplayingErrorMessageSchema}
                    >
                        {({errors, touched, isSubmitting}) => (
                            <Form>
                                <div className="row justify-content-center margin-t-50">
                                    <div className="col-sm-12" style={{paddingBottom: 30}}>
                                        <h2 className="text-white">
                                            Fill in your details
                                        </h2>
                                    </div>
                                    <div className="col-sm-6">
                                        {errors.firstName && touched.firstName ? (<div style={{color: "red"}}>{errors.firstName}</div>) : null}
                                        <Field name="firstName" type="text" className="form-control" placeholder="First Name" />
                                    </div>
                                    <div className="col-sm-6">
                                        {errors.lastName && touched.lastName ? (<div style={{color: "red"}}>{errors.lastName}</div>) : null}
                                        <Field name="lastName" type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                    <div className="col-sm-12">
                                        {errors.email && touched.email ? <div style={{color: "red"}}>{errors.email}</div> : null}
                                        <Field name="email" type="text" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="col-sm-12">
                                        {errors.message && touched.message ? <div style={{color: "red"}}>{errors.message}</div> : null}
                                        <Field name="message" className="form-control" placeholder="Your message" component={MyInput} />
                                    </div>
                                    <button type="submit" className="btn btn-send" disabled={isSubmitting}>Send</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        </>
    );
}

export default Contact;
