import React, { useState } from "react";
import Link from '../../utils/ActiveLink';

const Navbar = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    // Search Modal
    const [isActiveSearchModal, setActiveSearchModal] = useState("false");
    const handleToggleSearchModal = () => {
        setActiveSearchModal(!isActiveSearchModal);
    };

    // Sidebar Modal
    const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
    const handleToggleSidebarModal = () => {
        setActiveSidebarModal(!isActiveSidebarModal);
    };

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="main-navbar">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light nav-padding">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/images/logo.png" alt="logo" />
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">



                                    <li className="nav-item">

                                        {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/team-member" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Team Member</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/pricing" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Pricing</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/gallery" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Gallery</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/faq" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Faq's</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="#" activeClassName="active">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Events <i className='ri-arrow-right-s-line'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/events" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Events</a>
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link href="/events-details" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Events Details</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link href="/profile-authentication" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Profile Authentication</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/membership-levels" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Membership Levels</a>
                                                </Link>
                                            </li>
                                    
                                            <li className="nav-item">
                                                <Link href="/404" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">404 Error Page</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/coming-soon" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Coming Soon</a>
                                                </Link>
                                            </li>
 
                                            <li className="nav-item">
                                                <Link href="/privacy-policy" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Privacy Policy</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/terms-of-service" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Terms of Service</a>
                                                </Link>
                                            </li>
                                        </ul> */}
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">
                                                Home
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/about-us">
                                            <a onClick={toggleNavbar} className="nav-link">
                                                About Us
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/why-cws" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Why CWS?</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/our-satisfied-customers" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Our Satisfied Customers</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/testimonials" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Testimonials</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/services" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">
                                            Services
                                            </a>
                                        </Link>
                                    </li>

                                    {/* <li className="nav-item dropopen">
                                        <Link href="/services" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">
                                                Services
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <p className="nav-head">Web Development Services</p>
                                                <ul>
                                                    <li className="nav-item">
                                                        <Link href="/services/php-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">PHP Development Services</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/services/enterprise-portal-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Enterprise Portal Development</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/services/social-networking-apps" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Social Networking Apps</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/cms-development-company-in-usa" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Content Management System(CMS)</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <p className="nav-head">Mobile Application Development</p>
                                                <ul>
                                                    <li className="nav-item">
                                                        <Link href="/android-app-development-company-in-india" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Android App Development</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/iphone-ios-mobile-app-development-company-in-india" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">iPhone Application Development</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/ipad-app-development-company-in-india" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">iPad App Development</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/hybrid-app-development-company-in-india" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Hybrid App Development</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <p className="nav-head"> E-Commerce Development</p>
                                                <ul>
                                                    <li className="nav-item">
                                                        <Link href="/e-commerce-development-company-in-india" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">E-Commerce Solutions</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/woo-commerce-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">WooCommerce Development</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/magento-website-development-company-in-india" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Magento Development Services</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/services/virtuemart-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">VirtueMart Development</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <p className="nav-head">RIA Development</p>
                                                <ul>
                                                    <li className="nav-item">
                                                        <Link href="/services/html5-web-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">HTML5 Web Development</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/services/web-2-0-design-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Web 2.0 Design / Development</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/services/responsive-mobile-design-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Responsive Mobile Design / Development</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}

                                    {/* <li className="nav-item dropopen">
                                        <Link href="/services" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">
                                                Technologies
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <p className="nav-head">PHP CMS Development</p>
                                                <ul>
                                                    <li className="nav-item">
                                                        <Link href="/wordpress-website-development-company-in-india" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">WordPress Development</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/services/joomla-website-development-company-india" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Joomla Development Services</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/magento-website-development-company-in-india" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Magento Development Services</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/drupal-web-development-company-in-india" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Drupal Development</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <p className="nav-head">Mobile Development</p>
                                                <ul>
                                                    <li className="nav-item">
                                                        <Link href="/services/native-android-application-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Native Android Application Development</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/iphone-ios-mobile-app-development-company-in-india" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">iPhone Apps Development</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/ipad-app-development-company-in-india" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">iPad Apps Development</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/hybrid-app-development-company-in-india" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Hybrid Apps Development</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <p className="nav-head">PHP MVC Development</p>
                                                <ul>
                                                    <li className="nav-item">
                                                        <Link href="/cakephp-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">CakePHP Development</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/codeigniter-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Codeigniter Development</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/zend-development-company" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Zend Development</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/services/yii-laravel-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Yii & Laravel Development</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li>
                                                <p className="nav-head">Website Design</p>
                                                <ul>
                                                    <li className="nav-item">
                                                        <Link href="/responsive-website-design-company-in-india" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Responsive Website Development</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/services/web-2-0-design-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Web 2.0 Design / Development</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/services/mobile-website-development" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Mobile Website Development</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/responsive-website-design-company-in-india" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">RIA Development</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li> */}

                                    <li className="nav-item">
                                        <Link href="/our-process" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">
                                                Our Process
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/blog" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">
                                                Blog
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/portfolio" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">
                                                Portfolio
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/careers" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Careers</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/contact" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Contact</a>
                                        </Link>
                                    </li>

                                </ul>
                            </div>

                            <div className="others-options d-flex align-items-center">
                                {/* <div className="option-item">
                                    <i className="search-btn ri-search-line" onClick={handleToggleSearchModal}></i>
                                </div> */}

                                <div className="option-item">
                                    <Link href="/contact" activeClassName="active">
                                        <a className="default-btn">
                                            Let’s Talk
                                            <i className="ri-message-line"></i>
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>

                                {/* <div className="option-item">
                                    <div className="side-menu-btn" onClick={handleToggleSidebarModal}>
                                        <i className="ri-menu-4-line"></i>
                                    </div>
                                </div> */}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Search Form */}
            <div className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>

                        <div className="search-overlay-close" onClick={handleToggleSearchModal}>
                            <span className="search-overlay-close-line"></span>
                            <span className="search-overlay-close-line"></span>
                        </div>

                        <div className="search-overlay-form">
                            <form>
                                <input type="text" className="input-search" placeholder="Search here..." />
                                <button type="submit">
                                    <i className="ri-search-2-line"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Search Form */}

            {/* Sidebar Modal */}
            <div className={`sidebarModal modal right ${isActiveSidebarModal ? "" : "show"}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="close" onClick={handleToggleSidebarModal}>
                            <i className='ri-close-line'></i>
                        </button>

                        <div className="modal-body">
                            <div className="title">
                                <Link href="/">
                                    <a className="d-inline-block">
                                        <img src="/images/logo.png" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="sidebar-content">
                                <h3>About Us</h3>
                                <p>Since our inception, we are reckoned for providing IT solutions and also engaged in providing our clientele with custom app and web development services, application management outsourcing, consulting, system integration, offshore software development and much more.</p>

                                <div className="sidebar-btn">
                                    <Link href="/contact">
                                        <a className="default-btn">
                                            Let’s Talk
                                            <i className="ri-message-line"></i>
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="sidebar-contact-info">
                                <h3>Contact Information</h3>

                                <ul className="info-list">
                                    <li>
                                        <i className="ri-phone-fill"></i>
                                        <a href="tel:+1-800-678-1501">+1-800-678-1501</a>
                                    </li>

                                    <li>
                                        <i className="ri-mail-line"></i>
                                        <a href="mailto:sales@cwstechnology.com">sales@cwstechnology.com</a>
                                    </li>

                                    <li>
                                        <i className="ri-map-pin-line"></i>
                                        121 King St, Melbourne VIC <br /> 3000, Australia.
                                    </li>
                                </ul>
                            </div>

                            <ul className="sidebar-social-list">
                                <li>
                                    <a href="https://www.facebook.com/cwstechnology" target="_blank">
                                        <i className="ri-facebook-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/cwstechnology" target="_blank">
                                        <i className="ri-twitter-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/cws" target="_blank">
                                        <i className="ri-linkedin-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/user/CWSTechnology" target="_blank">
                                        <i className="ri-youtube-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://currents.google.com/112987627577415587648" target="_blank">
                                        <i className="ri-google-fill"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Sidebar Modal */}

            {/* Navbar, Search Form & Sidebar Modal Style */}
            <style jsx>{`
                .nav-head{
                    padding-left: 20px;
                    font-weight: bold;
                    text-transform: uppercase;
                }
                .dropopen{
                    position: static !important;
                }
                .dropopen .dropdown-menu{
                    display: flex !important;
                    justify-content: space-between !important;
                    width: 100% !important;
                    }
                // Navbar Area CSS
                .main-navbar {
                    padding: 10px 0;
                    //background-color: #093653;
                    background: linear-gradient(90deg, rgb(3, 24, 103) 31%, rgb(4, 17, 51) 100%, rgb(175, 228, 239) 100%);
                }
                .main-navbar .navbar {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    padding: 0;
                }
                .main-navbar .navbar .navbar-brand {
                    padding: 0;
                }
                .main-navbar .navbar ul {
                    padding-left: 0;
                    list-style-type: none;
                    margin-bottom: 0;
                }
                .main-navbar .navbar .navbar-nav .nav-item {
                    position: relative;
                    margin-left: 15px;
                    margin-right: 15px;
                }
                .main-navbar .navbar .navbar-nav .nav-item a {
                    color: var(--custom--white-color);
                    font-size: var(--font-size);
                    font-weight: 600;
                    padding-left: 0;
                    padding-right: 0;
                    padding-top: 25px;
                    padding-bottom: 25px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .main-navbar .navbar .navbar-nav .nav-item a i {
                    font-size: 14px;
                    position: relative;
                    top: 2px;
                    display: inline-block;
                    margin-left: -2px;
                    margin-right: -2px;
                }
                .main-navbar .navbar .navbar-nav .nav-item a:hover, .main-navbar .navbar .navbar-nav .nav-item a:focus, .main-navbar .navbar .navbar-nav .nav-item a.active {
                    color: var(--custom--active-color);
                }
                .main-navbar .navbar .navbar-nav .nav-item:last-child {
                    margin-right: 0;
                }
                .main-navbar .navbar .navbar-nav .nav-item:first-child {
                    margin-left: 0;
                }
                .main-navbar .navbar .navbar-nav .nav-item:hover a, .main-navbar .navbar .navbar-nav .nav-item.active a {
                    color: var(--custom--active-color);
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu {
                    border: none;
                    top: 70px;
                    left: 0;
                    z-index: 99;
                    opacity: 0;
                    width: 280px;
                    display: block;
                    border-radius: 8px;
                    padding: 10px 0;
                    margin-top: 15px;
                    position: absolute;
                    visibility: hidden;
                    background: var(--white-color);
                    -webkit-transition: all 0.2s ease-in-out;
                    transition: all 0.2s ease-in-out;
                    -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
                            box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li {
                    margin: 0;
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a {
                    padding: 10px 20px;
                    position: relative;
                    display: block;
                    color: var(--paragraph-color);
                    font-size: 15px;
                    font-weight: 600;
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a i {
                    margin: 0;
                    position: absolute;
                    top: 50%;
                    font-size: 15px;
                    -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                    right: 15px;
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a::before {
                    content: '';
                    position: absolute;
                    left: 20px;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                            transform: translateY(-50%);
                    width: 8px;
                    height: 8px;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    background-color: var(--main-color);
                    border-radius: 50%;
                    opacity: 0;
                    visibility: hidden;
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a:hover, .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a:focus, .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a.active {
                    color: var(--main-color);
                    padding-left: 35px;
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a:hover::before, .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a:focus::before, .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a.active::before {
                    opacity: 1;
                    visibility: visible;
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu {
                    top: 0;
                    opacity: 0;
                    left: -100%;
                    margin-top: 15px;
                    visibility: hidden;
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a {
                    color: var(--paragraph-color);
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a:hover, .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a:focus, .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a.active {
                    color: var(--main-color);
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu {
                  top: 0;
                  opacity: 0;
                  left: 100%;
                  visibility: hidden;
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
                  color: var(--paragraph-color);
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover, .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus, .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a.active {
                    color: var(--main-color);
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu {
                    top: 0;
                    opacity: 0;
                    left: -100%;
                    visibility: hidden;
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
                    color: var(--paragraph-color);
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover, .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus, .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a.active {
                    color: var(--main-color);
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu {
                    top: 0;
                    opacity: 0;
                    left: 100%;
                    visibility: hidden;
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
                    color: var(--paragraph-color);
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover, .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus, .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a.active {
                    color: var(--main-color);
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu {
                    top: 0;
                    opacity: 0;
                    left: -100%;
                    visibility: hidden;
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
                    color: var(--paragraph-color);
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover, .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus, .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a.active {
                    color: var(--main-color);
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu {
                    top: 0;
                    opacity: 0;
                    left: 100%;
                    visibility: hidden;
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
                    color: var(--paragraph-color);
                }
                
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover, .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus, .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a.active {
                    color: var(--main-color);
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
                    color: var(--main-color);
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
                    opacity: 1;
                    visibility: visible;
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
                    color: var(--main-color);
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
                    opacity: 1;
                    visibility: visible;
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
                    color: var(--main-color);
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
                    opacity: 1;
                    visibility: visible;
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
                    color: var(--main-color);
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
                    opacity: 1;
                    visibility: visible;
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li.active a {
                    color: var(--main-color);
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
                    opacity: 1;
                    visibility: visible;
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li.active a {
                    color: var(--main-color);
                }
                .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li:hover .dropdown-menu {
                    opacity: 1;
                    visibility: visible;
                    margin-top: 0;
                }
                .main-navbar .navbar .navbar-nav .nav-item:hover .dropdown-menu {
                    opacity: 1;
                    visibility: visible;
                    margin-top: 0;
                }
                .main-navbar .navbar .others-options .option-item {
                    position: relative;
                    margin-right: 25px;
                }
                .main-navbar .navbar .others-options .option-item:last-child {
                    margin-right: 0;
                }
                .main-navbar .navbar .others-options .option-item .search-btn {
                    cursor: pointer;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    color: var(--paragraph-color);
                    font-size: 25px;
                    transition: var(--transition);
                }
                .main-navbar .navbar .others-options .option-item .search-btn:hover {
                    color: var(--main-color);
                }
                .main-navbar .navbar .others-options .option-item .close-btn {
                    cursor: pointer;
                    display: none;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    color: var(--paragraph-color);
                    font-size: 25px;
                    transition: var(--transition);
                }
                .main-navbar .navbar .others-options .option-item .close-btn:hover {
                    color: var(--main-color);
                }
                .main-navbar .navbar .others-options .option-item .close-btn.active {
                    display: block;
                }
                .main-navbar .navbar .others-options .option-item .default-btn {
                    background-color: var(--optional-color);
                    color: var(--white-color);
                    padding: 12px 50px 12px 25px;
                }
                .main-navbar .navbar .others-options .option-item .default-btn span {
                    background-color: var(--main-color);
                }
                .main-navbar .navbar .others-options .option-item .side-menu-btn i {
                    font-size: 25px;
                    color: var(--custom--white-color);
                    cursor: pointer;
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .main-navbar .navbar .others-options .option-item .side-menu-btn i:hover {
                    color: var(--main-color);
                }
                .navbar-box-style .main-navbar {
                    padding: 0;
                }
                .navbar-box-style .main-navbar .navbar {
                    padding: 10px 30px;
                    background: var(--white-color);
                    border-radius: 5px;
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item a {
                    color: var(--paragraph-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item a:hover, .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item a:focus, .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item a.active {
                    color: var(--optional-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item:hover a, .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item.active a {
                    color: var(--optional-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a {
                    color: var(--paragraph-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a::before {
                    background-color: var(--optional-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a:hover, .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a:focus, .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a.active {
                    color: var(--optional-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a {
                    color: var(--paragraph-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a:hover, .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a:focus, .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a.active {
                   color: var(--optional-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
                   color: var(--paragraph-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover, .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus, .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a.active {
                   color: var(--optional-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
                   color: var(--paragraph-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover, .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus, .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a.active {
                   color: var(--optional-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
                   color: var(--paragraph-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover, .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus, .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a.active {
                   color: var(--optional-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
                   color: var(--paragraph-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover, .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus, .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a.active {
                   color: var(--optional-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
                   color: var(--paragraph-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover, .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus, .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a.active {
                   color: var(--optional-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
                   color: var(--optional-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
                   color: var(--optional-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
                   color: var(--optional-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
                   color: var(--optional-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li.active a {
                   color: var(--optional-color);
                }
                .navbar-box-style .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li.active a {
                   color: var(--optional-color);
                }
                .navbar-box-color .main-navbar {
                   background-color: #F4F8FC;
                }
                .navbar-area.is-sticky {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 999;
                    background: var(--white-color);
                    -webkit-box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
                            box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                }
                .navbar-area.is-sticky.navbar-box-style .main-navbar {
                    padding: 10px 0;
                }
                .navbar-area.is-sticky.navbar-box-style .main-navbar .navbar {
                    padding: 0;
                }
                .navbar-area.is-sticky.navbar-box-color .main-navbar {
                    background-color: var(--white-color);
                }
                
                // Navbar toggler
                .navbar-toggler {
                    border: none;
                    border-radius: 0;
                    padding: 0;
                }
                .navbar-toggler:focus {
                    -webkit-box-shadow: none;
                            box-shadow: none;
                }
                .navbar-toggler .icon-bar {
                    width: 35px;
                    -webkit-transition: all 0.3s;
                    transition: all 0.3s;
                    background: #fff;
                    height: 4px;
                    display: block;
                    border-radius: 3px;
                }
                .navbar-toggler .top-bar {
                    -webkit-transform: rotate(45deg);
                            transform: rotate(45deg);
                    -webkit-transform-origin: 10% 10%;
                            transform-origin: 10% 10%;
                    left: 4px;
                    position: relative;
                }
                .navbar-toggler .middle-bar {
                    opacity: 0;
                    margin: 5px 0;
                }
                .navbar-toggler .bottom-bar {
                    -webkit-transform: rotate(-45deg);
                            transform: rotate(-45deg);
                    -webkit-transform-origin: 10% 90%;
                            transform-origin: 10% 90%;
                    left: 4px;
                    position: relative;
                }
                .navbar-toggler.collapsed .top-bar {
                    -webkit-transform: rotate(0);
                            transform: rotate(0);
                    left: 0;
                }
                .navbar-toggler.collapsed .middle-bar {
                    opacity: 1;
                }
                .navbar-toggler.collapsed .bottom-bar {
                    -webkit-transform: rotate(0);
                            transform: rotate(0);
                    left: 0;
                }
                
                // Search Overlay CSS
                .search-overlay {
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    z-index: 99999;
                    opacity: 0;
                    visibility: hidden;
                    -webkit-transition: all 0.3s ease-in-out;
                    transition: all 0.3s ease-in-out;
                    overflow: hidden;
                }
                .search-overlay .search-overlay-layer {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 1;
                    -webkit-transform: translateX(100%);
                            transform: translateX(100%);
                }
                .search-overlay .search-overlay-layer:nth-child(1) {
                    left: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    -webkit-transition: all 0.3s ease-in-out 0s;
                    transition: all 0.3s ease-in-out 0s;
                }
                .search-overlay .search-overlay-layer:nth-child(2) {
                    left: 0;
                    background-color: rgba(0, 0, 0, 0.4);
                    -webkit-transition: all 0.3s ease-in-out 0.3s;
                    transition: all 0.3s ease-in-out 0.3s;
                }
                .search-overlay .search-overlay-layer:nth-child(3) {
                    left: 0;
                    background-color: rgba(0, 0, 0, 0.7);
                    -webkit-transition: all 0.9s ease-in-out 0.6s;
                    transition: all 0.9s ease-in-out 0.6s;
                }
                .search-overlay .search-overlay-close {
                    position: absolute;
                    top: 40px;
                    right: 40px;
                    width: 50px;
                    z-index: 2;
                    text-align: center;
                    cursor: pointer;
                    padding: 10px;
                    -webkit-transition: all 0.9s ease-in-out 1.5s;
                    transition: all 0.9s ease-in-out 1.5s;
                    opacity: 0;
                    visibility: hidden;
                }
                .search-overlay .search-overlay-close .search-overlay-close-line {
                    width: 100%;
                    height: 3px;
                    float: left;
                    margin-bottom: 5px;
                    background-color: #fff;
                    -webkit-transition: all 500ms ease;
                    transition: all 500ms ease;
                }
                .search-overlay .search-overlay-close .search-overlay-close-line:nth-child(1) {
                    -webkit-transform: rotate(45deg);
                            transform: rotate(45deg);
                }
                .search-overlay .search-overlay-close .search-overlay-close-line:nth-child(2) {
                    margin-top: -7px;
                    -webkit-transform: rotate(-45deg);
                            transform: rotate(-45deg);
                }
                .search-overlay .search-overlay-close:hover .search-overlay-close-line {
                    background: var(--optional-color);
                    -webkit-transform: rotate(180deg);
                            transform: rotate(180deg);
                }
                .search-overlay .search-overlay-form {
                    -webkit-transition: all 0.9s ease-in-out 1.4s;
                    transition: all 0.9s ease-in-out 1.4s;
                    opacity: 0;
                    visibility: hidden;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    -webkit-transform: translateY(-50%) translateX(-50%);
                            transform: translateY(-50%) translateX(-50%);
                    z-index: 2;
                    max-width: 500px;
                    width: 500px;
                }
                .search-overlay .search-overlay-form form {
                    position: relative;
                }
                .search-overlay .search-overlay-form form .input-search {
                    display: block;
                    width: 100%;
                    height: 60px;
                    border: none;
                    border-radius: 30px;
                    color: var(--black-color);
                    padding: 3px 0 0 25px;
                }
                .search-overlay .search-overlay-form form .input-search::-webkit-input-placeholder {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    letter-spacing: .5px;
                    color: var(--blackColor);
                }
                .search-overlay .search-overlay-form form .input-search:-ms-input-placeholder {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    letter-spacing: .5px;
                    color: var(--blackColor);
                }
                .search-overlay .search-overlay-form form .input-search::-ms-input-placeholder {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    letter-spacing: .5px;
                    color: var(--blackColor);
                }
                .search-overlay .search-overlay-form form .input-search::placeholder {
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    letter-spacing: .5px;
                    color: var(--blackColor);
                }
                .search-overlay .search-overlay-form form .input-search:focus {
                    outline: 0;
                }
                .search-overlay .search-overlay-form form .input-search:focus::-webkit-input-placeholder {
                    color: transparent;
                }
                .search-overlay .search-overlay-form form .input-search:focus:-ms-input-placeholder {
                    color: transparent;
                }
                .search-overlay .search-overlay-form form .input-search:focus::-ms-input-placeholder {
                    color: transparent;
                }
                .search-overlay .search-overlay-form form .input-search:focus::placeholder {
                    color: transparent;
                }
                .search-overlay .search-overlay-form form button {
                    position: absolute;
                    right: 5px;
                    top: 5px;
                    width: 50px;
                    color: var(--white-color);
                    height: 50px;
                    border-radius: 50%;
                    background-color: var(--main-color);
                    -webkit-transition: var(--transition);
                    transition: var(--transition);
                    border: none;
                    font-size: 20px;
                    line-height: 50px;
                }
                .search-overlay .search-overlay-form form button:hover {
                    background-color: var(--black-color);
                    color: var(--white-color);
                }
                .search-overlay.search-overlay-active.search-overlay {
                    opacity: 1;
                    visibility: visible;
                }
                .search-overlay.search-overlay-active.search-overlay .search-overlay-layer {
                    -webkit-transform: translateX(0);
                            transform: translateX(0);
                }
                .search-overlay.search-overlay-active.search-overlay .search-overlay-close {
                    opacity: 1;
                    visibility: visible;
                }
                .search-overlay.search-overlay-active.search-overlay .search-overlay-form {
                    opacity: 1;
                    visibility: visible;
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
                
                @media only screen and (max-width: 1199px) {
                    .navbar-area {
                        background-color: var(--white-color);
                        padding-top: 15px;
                        padding-bottom: 15px;
                    }
                }
	
                // Responsive Style
                @media only screen and (max-width: 767px) {
                    .navbar-brand img{
                        margin: 10px;
                    }
                    .modal.right .modal-dialog {
                        width: 310px;
                    }
                    .dropopen .dropdown-menu{
                        flex-flow: wrap;
                    }
                    .default-btn{
                        top: 18px !important;
                    }
                    .nav-padding{
                        padding: 10px 0;
                    }
                    .navbar-area{
                        padding: 0;
                    }
                    .main-navbar {
                        padding: 10px !important;
                    }
                    .others-options {
                        display: none !important;
                    }
                    
                    
                }

                @media only screen and (max-width: 550px) {
                    .search-overlay .search-overlay-form {
                        max-width: 300px;
                        width: 300px;
                    }
                }

                @media only screen and (min-width : 768px) and (max-width : 991px) {
                    .others-options {
                        display: none !important;
                    }
                    .navbar-area {
                        padding-top: 0;
	                    padding-bottom: 0;
                    }
                    .navbar-brand img{
                        margin: 10px;
                    }
                }

                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                    // Navbar 
                    .navbar-area {
                        padding-top: 0;
	                    padding-bottom: 0;
                    }
                    .main-navbar {
                        padding: 0;
                    }
                    .main-navbar .navbar .navbar-nav .nav-item {
                        margin-left: 9px;
                        margin-right: 9px;
                    }
                    .main-navbar .navbar .navbar-nav .nav-item a {
                        font-size: 15px;
                        padding-top: 20px;
                        padding-bottom: 20px;
                    }
                    .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu {
                        width: 250px;
                    }
                    .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a {
                        font-size: 14px;
                        padding: 8px 20px;
                    }
                    .main-navbar .navbar .others-options .option-item {
                        margin-right: 15px;
                    }
                    .main-navbar .navbar .others-options .option-item .default-btn {
                        padding: 10px 40px 10px 20px;
                        font-size: 13px;
                    }
                    .main-navbar .navbar .others-options .option-item .default-btn i {
                        right: 20px;
                    }
                }
                
                @media only screen and (max-width: 991px) {
                    // Navbar
                    .navbar-area {
                        box-shadow: 0 0 10px #ddd;
                    }
                    .main-navbar {
                        padding: 0;
                    }
                    .main-navbar .navbar .navbar-nav {
                        border-top: 1px solid #eee;
                        overflow-y: auto;
                        max-height: 60vh;
                        margin-top: 10px !important;
                        padding-right: 15px;
                        padding-top: 15px;
                    }
                    .main-navbar .navbar .navbar-nav .nav-item {
                        margin: 0;
                    }
                    .main-navbar .navbar .navbar-nav .nav-item a {
                        padding-top: 8px;
                        font-size: 15px;
                        padding-bottom: 8px;
                    }
                    .main-navbar .navbar .navbar-nav .nav-item a i {
                        display: none;
                    }
                    .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu {
                        position: relative;
                        opacity: 1;
                        visibility: visible;
                        width: 100%;
                        margin-top: 10px;
                        top: 0 !important;
                        border: 1px solid #eee;
                        margin-top: 0;
                        margin-bottom: 10px;
                    } 
                    .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li a {
                        padding: 8px 15px;
                        font-size: 14px;
                    }
                    .main-navbar .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu {
                        position: relative;
                        opacity: 1;
                        visibility: visible;
                        width: 90%;
                        margin-top: 10px;
                        top: 0 !important;
                        border: 1px solid #eee;
                        margin-top: 0;
                        margin-bottom: 10px;
                        left: 15px;
                    } 
                    .main-navbar .navbar .others-options {
                        position: absolute;
                        right: 45px;
                        top: 5px;
                    }
                    .main-navbar .navbar .others-options .option-item {
                        margin-right: 10px;
                    }
                    .main-navbar .navbar .others-options .option-item .default-btn {
                        padding: 5px 8px;
                        font-size: 10px;
                        position: relative;
                        top: -3px;
                    }
                    .main-navbar .navbar .others-options .option-item .default-btn i {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}

export default Navbar;