import React from 'react'

export default function SingleCareer({ career }) {
    return (
        <>
            <blockquote className="blockquote" key={career.id}>

                <h5>{career.attributes.applying_for}</h5>

                <p>{career.attributes.experience}</p>
                <br />

                <h5>Description:</h5>

                <p>{career.attributes.description}</p>

                <h5>Role & Responsibilities:</h5>

                <p dangerouslySetInnerHTML={{ __html: career.attributes.role_and_responsibilities }}></p>

                <h5>Skills & Expertise:</h5>

                <p dangerouslySetInnerHTML={{ __html: career.attributes.skills_and_expertise }}></p>
                {
                    (career.attributes.qualifications != null)
                        ?
                        <>
                            <h5>Preferred Skills & Qualifications:</h5>

                            <p dangerouslySetInnerHTML={{ __html: career.attributes.qualifications }}></p>
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
        </>
    )
}
