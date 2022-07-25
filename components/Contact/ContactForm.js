import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'

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

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const [submitBtnText, setSubmitBtnText] = useState("Send Message");
    const [focused, setFocused] = useState(false);

    const handleFocus = e => {
        setFocused(true);
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setSubmitBtnText('Sending...');
        setTimeout(()=>{
            setContact(INITIAL_STATE);
            alertContent();
            setSubmitBtnText('Send Message');
        },3000)
        // try {
            
        //     const url = `${baseUrl}/api/contact`;
        //     const { name, email, number, subject, text } = contact;
        //     const payload = { name, email, number, subject, text };
        //     const response = await axios.post(url, payload);
        //     //console.log(response);
        //     setContact(INITIAL_STATE);
        //     alertContent();
        //     setSubmitBtnText('Send Message');
        // } catch (error) {
        //     console.log(error)
        //     setSubmitBtnText('Send Message');
        // }
    };

    return (
        <>
            <div className="contact-area ptb-100">
                <div className="container">
                    <div className="contact-form">
                        <h3>Get in Touch</h3>

                        <div id="zf_div_Rvuqcx-bkWcjXd-G8PP7K743cnFJvqQlGqh9dNpABGE"></div>

                        {/* <form onSubmit={handleSubmit} >
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            placeholder="Full Name" 
                                            className="form-control" 
                                            value={contact.name}
                                            onChange={handleChange} 
                                            onBlur={handleFocus}
                                            focused={focused.toString()}
                                            required 
                                            pattern="^[A-Za-z0-9]{3,20}$"
                                        />
                                        <span className='error-msg'>Name should be 3-20 characters & should't include any special characters!.</span>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="email" 
                                            placeholder="Email" 
                                            className="form-control" 
                                            value={contact.email}
                                            onChange={handleChange} 
                                            onBlur={handleFocus}
                                            focused={focused.toString()}
                                            required 
                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                        />
                                        <span className='error-msg'>It should be valid email address!.</span>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="number" 
                                            placeholder="Phone number" 
                                            className="form-control" 
                                            value={contact.number}
                                            onChange={handleChange} 
                                            onBlur={handleFocus}
                                            focused={focused.toString()}
                                            required 
                                            pattern="^[+0-9]{10,20}$"
                                        />
                                        <span className='error-msg'>Phone Number id is required!.</span>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="subject" 
                                            placeholder="Subject" 
                                            className="form-control" 
                                            value={contact.subject}
                                            onChange={handleChange} 
                                            onBlur={handleFocus}
                                            focused={focused.toString()}
                                            required 
                                            pattern="^[A-Za-z0-9]{3,40}$"
                                        />
                                        <span className='error-msg'>Subject is required!.</span>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input 
                                            name="text"
                                            type="text" 
                                            cols="30" 
                                            rows="6" 
                                            placeholder="Write your message..." 
                                            className="form-control" 
                                            value={contact.text}
                                            onChange={handleChange} 
                                            onBlur={handleFocus}
                                            focused={focused.toString()}
                                            required 
                                            pattern="^[A-Za-z0-9]{5,40}$"
                                        />
                                        <span className='error-msg'>Message is required!.</span>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <button type="submit" className="default-btn" onBlur={handleFocus}>
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
                    display: none;
                    font-size: 12px;
                    text-align: left;
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
                    border-color: var(--optional-color);
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