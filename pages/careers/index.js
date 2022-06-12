import React,{ useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import CTA from '../../components/Common/CTA';
import Footer from '../../components/_App/Footer';
import { NextSeo } from 'next-seo';
import {
    getContactUsInfo,
    getOurCareers,
    getApplyingFor
} from '../../utils/strapi';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import axios from 'axios';
import baseUrl from '../../utils/baseUrl'
import fileToArrayBuffer from 'file-to-array-buffer';

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your application was successfully send and will back to you soon',
        icon: 'success',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}




const Careers = ({ contactUsInfo, careers, vacancy }) => {
    
    // Form initial state
    const INITIAL_STATE = {
        applyFor: "",
        experience: "",
        name: "",
        email: "",
        number: "",
        location: "",
        // resume: "",
    };

    const [formValue, setFormValue] = useState(INITIAL_STATE);

    // Sidebar Modal
    const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
    const handleToggleSidebarModal = () => {
        setActiveSidebarModal(!isActiveSidebarModal);
        setFormValue(INITIAL_STATE)
    };

    const handleChange = e => {
       const { name, value } = ((name == 'resume') ? e.target.files[0] : e.target);
        // if(name == 'resume'){
        //     setfile(e.target.files[0])
        // }
        setFormValue({...formValue, [name]: value });
    }

    console.log("after", formValue)

    const handleSubmit = async e => {
        e.preventDefault();
        const { applyFor, experience, name, email, number, location } = formValue;
        try {
            let formData = new FormData();
            //formData.append("flies.resume", resume);
            formData.append("data", JSON.stringify(formValue));
            axios({
                method: "post",
                url: `${baseUrl}/api/job-applications`,
                data: formData,
            })
            .then(response => {
                console.log(response);
                if(response.status == 200){
                    setActiveSidebarModal(!isActiveSidebarModal);
                    setFormValue(INITIAL_STATE)
                    alertContent();
                }
                
            }).catch((error) => {
                console.log("Error: ", error.message);
              });

           
            const url = `${baseUrl}/api/jobApply`;
            const payload = { applyFor, experience, name, email, number, location };
            const response = await axios.post(url, payload);
            console.log(response);
            setFormValue(INITIAL_STATE);
        } catch (error) {
            console.log(error)
        }
    };


    const SEO = {
        title: "Careers",
        description: "Careers des"
    }

    const { applyFor, experience, name, email, number, location, resume } = formValue;
    return (
        <>
            <NextSeo {...SEO} />

            <Navbar />

            <PageBanner
                pageTitle="Careers"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Careers"
            />


            <div className="privacy-policy-area ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="privacy-policy-content">

                                <h4 style={{ fontWeight: 'bolder' }}>Careers</h4>
                                <hr style={{ width: 35, height: 7 }}></hr>
                                <p style={{ fontWeight: 'bolder' }}>What makes us a great place to work? Awesome projects, cool people, short commutes and metro connectivity. We're looking for smart people who can get things done. Please get in touch with us with your latest resume.</p>
                                <h3>Job Openings @ CWS</h3>

                                {
                                    (typeof careers != "undefined" && careers !== null && careers.data.length > 0)
                                        ?

                                        careers.data.map(item => {
                                            return (
                                                <blockquote className="blockquote" key={item.id}>

                                                    <h5>{item.applying_for}</h5>

                                                    <p>{item.experience}</p>
                                                    <br />

                                                    <h5>Description:</h5>

                                                    <p>{item.description}</p>

                                                    <h5>Role & Responsibilities:</h5>

                                                    <p dangerouslySetInnerHTML={{ __html: item.role_and_responsibilities }}></p>

                                                    <h5>Skills & Expertise:</h5>

                                                    <p dangerouslySetInnerHTML={{ __html: item.skills_and_expertise }}></p>
                                                    {
                                                        (item.qualifications != null)
                                                            ?
                                                            <>
                                                                <h5>Preferred Skills & Qualifications:</h5>

                                                                <p dangerouslySetInnerHTML={{ __html: item.qualifications }}></p>
                                                            </>
                                                            :
                                                            null
                                                    }
                                                    <Link href="#">
                                                        <a onClick={handleToggleSidebarModal} className="blog-btn">
                                                            <i className="ri-arrow-right-line"></i> APPLY
                                                        </a>
                                                    </Link>

                                                </blockquote>
                                            )

                                        })
                                        :
                                        <></>
                                }



                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Modal */}
                <div className={`sidebarModal modal right ${isActiveSidebarModal ? "" : "show"}`}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <button type="button" className="close" onClick={handleToggleSidebarModal}>
                                <i className='ri-close-line'></i>
                            </button>

                            <div className="modal-body">
                                <div className="title">
                                    <h3 style={{ textAlign: 'center' }}>Apply Job</h3>
                                </div>

                                <div className="sidebar-content contact-form">
                                    <p style={{ fontSize: 15 }}>Fill out the form below and let us call you at your convenience!</p>

                                    <form onSubmit={handleSubmit}>
                                        <div className="row">

                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <select
                                                        className="form-control"
                                                        value={applyFor}
                                                        onChange={handleChange}
                                                        name="applyFor"
                                                        required
                                                    >
                                                        <option value="">Select Post To Apply For</option>
                                                        {
                                                            vacancy.data.length > 0
                                                                ?
                                                                vacancy.data.map(item => {
                                                                    return (
                                                                        <option
                                                                            value={item.applying_for}
                                                                        >
                                                                            {item.applying_for}
                                                                        </option>
                                                                    )
                                                                })
                                                                :
                                                                null
                                                        }

                                                    </select>

                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <select
                                                        className="form-control"
                                                        value={experience}
                                                        onChange={handleChange}
                                                        name="experience"
                                                        required
                                                    >
                                                        <option value="">Select Experience</option>
                                                        <option value="Fresher">Fresher</option>
                                                        <option value="1-3 Years">1-3 Years</option>
                                                        <option value="3-4 Years">3-4 Years</option>
                                                        <option value="More than 5 Years">More than 5 Years</option>
                                                    </select>

                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="Full Name"
                                                        className="form-control"
                                                        value={name}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email"
                                                        className="form-control"
                                                        value={email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        pattern="[0-9]*"
                                                        name="number"
                                                        placeholder="Phone number"
                                                        className="form-control"
                                                        value={number}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                <select
                                                        className="form-control"
                                                        value={location}
                                                        onChange={handleChange}
                                                        name="location"
                                                        required
                                                    >
                                                        <option value="">Select Current Location</option>
                                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                        <option value="Assam">Assam</option>
                                                        <option value="Bihar">Bihar</option>
                                                        <option value="Chandigarh">Chandigarh</option>
                                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                                        <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                                        <option value="Daman and Diu">Daman and Diu</option>
                                                        <option value="Delhi/NCR">Delhi/NCR</option>
                                                        <option value="Goa">Goa</option>
                                                        <option value="Gujarat">Gujarat</option>
                                                        <option value="Haryana">Haryana</option>
                                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                                        <option value="Jharkhand">Jharkhand</option>
                                                        <option value="Karnataka">Karnataka</option>
                                                        <option value="Kerala">Kerala</option>
                                                        <option value="Lakshadweep">Lakshadweep</option>
                                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                        <option value="Maharashtra">Maharashtra</option>
                                                        <option value="Manipur">Manipur</option>
                                                        <option value="Meghalaya">Meghalaya</option>
                                                        <option value="Mizoram">Mizoram</option>
                                                        <option value="Nagaland">Nagaland</option>
                                                        <option value="Orissa">Orissa</option>
                                                        <option value="Pondicherry">Pondicherry</option>
                                                        <option value="Punjab">Punjab</option>
                                                        <option value="Rajasthan">Rajasthan</option>
                                                        <option value="Sikkim">Sikkim</option>
                                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                                        <option value="Tripura">Tripura</option>
                                                        <option value="Uttaranchal">Uttaranchal</option>
                                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                        <option value="West Bengal">West Bengal</option>
                                                    </select>

                                                </div>
                                            </div>

                                            {/* <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <input
                                                        type="file"
                                                        name="resume"
                                                        accept=".doc, .docx,.pdf"
                                                        className="form-control"
                                                        value={resume}
                                                        onChange={handleChange}
                                                        //onChange={(e) => setSelectedFile(e.target.files[0])}
                                                        required
                                                    />
                                                </div>
                                            </div> */}

                                            <div className="col-lg-12 col-md-12" style={{ textAlign: 'center' }}>
                                                <button type="submit" className="default-btn">
                                                    Apply job
                                                    <i className="ri-arrow-right-line"></i>
                                                    <span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* End Sidebar Modal */}


                <style jsx>{`
                    .blog-btn {
                        font-size: var(--font-size);
                        font-weight: 500;
                        position: relative;
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .blog-btn i {
                        position: absolute;
                        right: -20px;
                        top: 50%;
                        -webkit-transform: translateY(-50%);
                                transform: translateY(-50%);
                        font-size: 15px;
                    }
                    .blog-btn:hover {
                        letter-spacing: 1px;
                    }
                    .privacy-policy-content img {
                        border-radius: 5px;
                        margin-bottom: 30px;
                    }
                    .privacy-policy-content h3 {
                        margin-top: 25px;
                        margin-bottom: 15px;
                        font-size: 25px;
                    }
                    .privacy-policy-content .blockquote, .privacy-policy-content blockquote {
                        margin-top: 25px;
                        margin-bottom: 30px;
                        background-color: #e6f2f5;
                        text-align: left !important;
                        padding: 25px !important;
                        border-radius: 5px;
                    }
                    .privacy-policy-content .blockquote p, .privacy-policy-content blockquote p {
                        margin-bottom: 0;
                        line-height: 1.8;
                        font-size: 15px !important;
                        font-weight: 500;
                    }
                    .privacy-policy-content .blockquote::after, .privacy-policy-content blockquote::after {
                        display: none;
                    }
                    .privacy-policy-content .blockquote::before, .privacy-policy-content blockquote::before {
                        display: none;
                    }
                    .privacy-policy-content ol, .privacy-policy-content ul {
                        margin-top: 20px;
                    }
                    .privacy-policy-content ol li, .privacy-policy-content ul li {
                        margin-bottom: 10px;
                        color: var(--paragraph-color);
                        line-height: 1.8;
                        font-weight: 500;
                        font-size: 15px;
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

                    // Sidebar Modal CSS
                    .modal.right {
                        left: auto;
                        right: -100%;
                    }
                    .modal.right .modal-dialog {
                        position: fixed;
                        margin: auto;
                        width: 420px;
                        height: 100%;
                        -webkit-transform: translate3d(0%, 0, 0);
                                transform: translate3d(0%, 0, 0);
                    }
                    .modal.right .modal-content {
                        height: 100%;
                        overflow-y: auto;
                        background-color: var(--white-color);
                        border: none;
                        border-radius: 0;
                    }
                    .modal.right .modal-content button.close {
                        float: unset;
                        position: absolute;
                        right: 20px;
                        top: 30px;
                        background-color: transparent;
                        color: var(--black-color);
                        z-index: 2;
                        opacity: 1;
                        border: none;
                        text-shadow: unset;
                        -webkit-box-shadow: unset;
                                box-shadow: unset;
                        font-size: 25px;
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .modal.right .modal-content button.close:hover {
                        color: red;
                    }
                    .modal.right .modal-dialog {
                        right: -100%;
                        -webkit-transition: opacity 0.3s linear, right 0.3s ease-out;
                        transition: opacity 0.3s linear, right 0.3s ease-out;
                    }
                    .modal.right.show {
                        right: 0;
                    }
                    .modal.right.show .modal-dialog {
                        right: 0;
                    }
                    .sidebarModal.modal {
                        background-color: rgba(0, 0, 0, 0.3);
                        display: block;
                        opacity: 1;
                    }
                    .sidebarModal.modal .modal-body {
                        padding: 35px 30px 45px;
                    }
                    .sidebarModal.modal .modal-body .sidebar-content {
                        margin-top: 35px;
                    }
                    .sidebarModal.modal .modal-body .sidebar-content h3 {
                        font-size: 22px;
                        margin-bottom: 15px;
                    }
                    .sidebarModal.modal .modal-body .sidebar-content .sidebar-btn {
                        margin-top: 25px;
                    }
                    .sidebarModal.modal .modal-body .sidebar-contact-info {
                        margin-top: 30px;
                    }
                    .sidebarModal.modal .modal-body .sidebar-contact-info h3 {
                        font-size: 22px;
                        margin-bottom: 0;
                    }
                    .sidebarModal.modal .modal-body .sidebar-contact-info .info-list {
                        padding-left: 0;
                        margin-top: 30px;
                        margin-bottom: 0;
                    }
                    .sidebarModal.modal .modal-body .sidebar-contact-info .info-list li {
                        list-style-type: none;
                        font-size: 14px;
                        color: var(--paragraph-color);
                        font-weight: 500;
                        margin-bottom: 20px;
                        position: relative;
                        padding-left: 22px;
                    }
                    .sidebarModal.modal .modal-body .sidebar-contact-info .info-list li:last-child {
                        margin-bottom: 0;
                    }
                    .sidebarModal.modal .modal-body .sidebar-contact-info .info-list li a {
                        color: var(--paragraph-color);
                    }
                    .sidebarModal.modal .modal-body .sidebar-contact-info .info-list li a:hover {
                        color: var(--main-color);
                    }
                    .sidebarModal.modal .modal-body .sidebar-contact-info .info-list li i {
                        position: absolute;
                        left: 0;
                        top: 2px;
                        font-size: var(--font-size);
                        color: var(--main-color);
                    }
                    .sidebarModal.modal .modal-body .sidebar-contact-info .info-list li .ri-mail-line {
                        color: #FF414B;
                    }
                    .sidebarModal.modal .modal-body .sidebar-contact-info .info-list li .ri-map-pin-line {
                        color: #36CC72;
                    }
                    .sidebarModal.modal .modal-body .sidebar-social-list {
                        list-style-type: none;
                        padding-left: 0;
                        margin-bottom: 0;
                        margin-top: 30px;
                    }
                    .sidebarModal.modal .modal-body .sidebar-social-list li {
                        display: inline-block;
                        margin-right: 8px;
                    }
                    .sidebarModal.modal .modal-body .sidebar-social-list li:last-child {
                        margin-right: 0;
                    }
                    .sidebarModal.modal .modal-body .sidebar-social-list li i {
                        display: inline-block;
                        height: 35px;
                        width: 35px;
                        line-height: 35px;
                        background-color: var(--main-color);
                        text-align: center;
                        color: var(--white-color);
                        font-size: var(--font-size);
                        border-radius: 50%;
                        -webkit-transition: var(--transition);
                        transition: var(--transition);
                    }
                    .sidebarModal.modal .modal-body .sidebar-social-list li i:hover {
                        -webkit-transform: translateY(-5px);
                                transform: translateY(-5px);
                        background-color: var(--optional-color);
                        color: var(--white-color);
                    }
        
                    // Responsive Style
                    @media only screen and (max-width: 767px) {
                        .privacy-policy-content h3 {
                            font-size: 22px;
                        }
                        .modal.right .modal-dialog {
                            width: 310px;
                        }
                    }

                    @media only screen and (min-width : 768px) and (max-width : 991px) {
                        
                    }

                    @media only screen and (min-width : 992px) and (max-width : 1199px) {
                        
                    }
                `}</style>
            </div>


            <div className="pb-100">
                <CTA />
            </div>

            {contactUsInfo && <Footer contactUsInfo={contactUsInfo} />}
        </>
    )
}

export default Careers;

export async function getStaticProps({ params }) {

    const contactUsInfo = await getContactUsInfo();
    const careers = await getOurCareers();
    const vacancy = await getApplyingFor();

    return {
        props: {
            contactUsInfo,
            careers,
            vacancy
        },
        revalidate: 10, // In seconds
    };
}