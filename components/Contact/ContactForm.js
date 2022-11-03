import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
// import Recaptcha from 'react-google-recaptcha';
import HubspotForm from 'react-hubspot-form'



const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}


const ContactForm = () => {

    const [loading, setisLoading] = useState(false)
    const [submitBtnText, setSubmitBtnText] = useState("Send Message");

    const schema = Yup.object().shape({
        name: Yup.string().required('First name is required.').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        email: Yup.string().email('Enter valid email id.').required('Email id is required.'),
        number: Yup.string().required('Number is required.')
            .matches(/^[0-9\s]+$/, "Only numbers are allowed for this field ")
            .min(10, 'Enter minimum 10 digit mobile number.')
            .max(13, "Nobile number can't exceed 13 digits")
        ,
        subject: Yup.string().required('Subject is required.'),
        text: Yup.string().required('Number is required.'),
    })
    //validation schema end
    const formOptionsLogin = { resolver: yupResolver(schema) }
    const { register, formState: { errors, isSubmitting }, handleSubmit, resetField } = useForm(formOptionsLogin);
    //login submit handler
    const onSubmit = async formValue => {
        setisLoading(true)
        setSubmitBtnText('Sending Message...');
        console.log(JSON.stringify(formValue))
        try {
            const url = `${baseUrl}/api/contact`;
            const payload = formValue;
            const response = await axios.post(url, payload);
            console.log(response);
            setisLoading(false)
            alertContent();
            setSubmitBtnText('Send Message');
            resetField('name');
            resetField('email');
            resetField('number');
            resetField('subject');
            resetField('text');
        } catch (error) {
            setisLoading(false)
            console.log(error)
            setSubmitBtnText('Send Message');
        }
    }

    return (
        <>
            <div className="contact-area ptb-100">
                <div className='container text-center' style={{paddingBottom: 50}}>
                    <div className='row'>
                    <p style={{fontWeight: 400,color: '#56576B'}}>Are you looking for a Website or Software Development Services? If you are Dubai please fill in the form and on of our expert will visit you</p>
                    </div>
                </div>
                <div className="container">
                   
                    <div className="contact-form">
                        <h3>Please let us know your Basic information</h3>

                        <HubspotForm
                            portalId='22579069'
                            formId='4b4d5861-9bb0-4294-a80b-238d1169ed8e'
                            loading={<div>Loading...</div>}
                        />

                        {/* <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">


                                        <input
                                            type="text"
                                            name="name"
                                            {...register("name")}
                                            placeholder="Full Name"
                                            className={`form-control ${errors.name ? 'is-invalids' : ''}`}
                                        />
                                        <span className='error-msg'>{errors.name?.message}</span>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="email"
                                            {...register("email")}
                                            placeholder="Email"
                                            className={`form-control ${errors.email ? 'is-invalids' : ''}`}
                                        />
                                        <span className='error-msg'>{errors.email?.message}</span>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="number"
                                            {...register("number")}
                                            placeholder="Phone number"
                                            className={`form-control ${errors.number ? 'is-invalids' : ''}`}
                                        />
                                        <span className='error-msg'>{errors.number?.message}</span>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="subject"
                                            {...register("subject")}
                                            placeholder="Subject"
                                            className={`form-control ${errors.subject ? 'is-invalids' : ''}`}
                                        />
                                        <span className='error-msg'>{errors.subject?.message}</span>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            name="text"
                                            type="text"
                                            {...register("text")}
                                            cols="30"
                                            rows="6"
                                            placeholder="Write your message..."
                                            className={`form-control ${errors.text ? 'is-invalids' : ''}`}
                                        />
                                        <span className='error-msg'>{errors.text?.message}</span>
                                        

                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <button type="submit" className="default-btn">
                                        {submitBtnText}
                                        <i className="ri-arrow-right-line"></i>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </form> */}
                    </div>
                </div>
            </div>

            <style jsx>{`
            body,
            body.background {
              background-color: #ededed;
              padding: 1rem;
            }
                .error-msg{
                    color: #c81f1f;
                    font-size: 12px;
                    float: left;
                }
                .is-invalids{
                    border: 1px solid red !important;
                }
                
                textarea:invalid ~ span{
                    display: block;
                }
                .contact-form {
                    text-align: center;
                    max-width: 1050px;
                    margin: auto;
                }
                
                .contact-form h3 {
                    font-size: 28px;
                    margin-bottom: 45px;
                }
                
                .contact-form .form-group {
                    margin-bottom: 20px;
                }
                
                .contact-form .form-group .form-control {
                    display: block;
                    width: 100%;
                    height: 60px;
                    outline: 0;
                    background-color: #F4F8FC;
                    border: 1px solid #E6EDF6;
                    border-radius: 5px;
                    -webkit-box-shadow: none;
                            box-shadow: none;
                    padding: 15px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    font-size: 15px;
                }
                
                .contact-form .form-group .form-control::-webkit-input-placeholder {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    color: var(--paragraph-color);
                }
                
                .contact-form .form-group .form-control:-ms-input-placeholder {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    color: var(--paragraph-color);
                }
                
                .contact-form .form-group .form-control::-ms-input-placeholder {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    color: var(--paragraph-color);
                }
                
                .contact-form .form-group .form-control::placeholder {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    color: var(--paragraph-color);
                }
                
                .contact-form .form-group .form-control:focus {
                    outline: 0;
                    background-color: var(--white-color);
                    border-color: green;
                    -webkit-box-shadow: none;
                            box-shadow: none;
                }
                
                .contact-form .form-group .form-control:focus::-webkit-input-placeholder {
                    color: transparent;
                }
                
                .contact-form .form-group .form-control:focus:-ms-input-placeholder {
                    color: transparent;
                }
                
                .contact-form .form-group .form-control:focus::-ms-input-placeholder {
                    color: transparent;
                }
                
                .contact-form .form-group .form-control:focus::placeholder {
                    color: transparent;
                }
                
                .contact-form .form-group textarea.form-control {
                    height: auto;
                    padding: 15px;
                    line-height: 1.5rem;
                }
                
                .contact-form .form-group .help-block.with-errors ul {
                    color: red;
                    margin-bottom: 0;
                    margin-top: 10px;
                    text-align: left;
                }
                
                .contact-form .form-group .help-block.with-errors ul li {
                    font-size: 14px;
                }
                
                .contact-form #msgSubmit {
                    margin: 0;
                    font-size: 1.3rem;
                }
                
                .contact-form #msgSubmit.text-danger, .contact-form #msgSubmit.text-success {
                    margin-top: 25px;
                    font-size: 18px;
                    font-weight: 500;
                }
                
                .contact-form .default-btn {
                    margin-top: 10px;
                }
	
                // Responsive Style
                @media only screen and (max-width: 767px) {

                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    
                }
            `}</style>
        </>
    )
}

export default ContactForm;