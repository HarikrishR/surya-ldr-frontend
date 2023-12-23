import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.webp';
import location from '../../assets/images/location.svg';
import phone from '../../assets/images/phone.svg';
import mail from '../../assets/images/mail.svg';
import facebook from '../../assets/images/facebook.png'
import linkedIn from '../../assets/images/linkedin.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'
import './footer.css';

class Footer extends React.Component {

    render(){
        return(
            <div className='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 mb-4 mb-md-0'>
                            <img src={logo} alt='LDR Survey' className='footerLogo mb-3' />
                            <p className='mb-0 footerDes'>We answer a lot of questions about land, such as how it is divided, how it is developed, whether a piece of land can be sold or bought, how it is positioned out, and how it is planned and built.</p>
                        </div>
                        <div className='col-sm-6 col-md-3 mb-4 mb-sm-0'>
                            <h5 className='mb-4'>QUICK LINKS</h5>
                            <ul className='ps-0 mb-0'>
                                <li className='mb-1'><Link title='LDR Survey' to="/">Home</Link></li>
                                <li className='mb-1'><Link title='About Us' to="/about-us">About Us</Link></li>
                                <li className='mb-1'><Link title='Services' to="/services">Services</Link></li>
                                <li className='mb-1'><Link title='Sample Sketches' to="/sample-sketches">Sample Sketches</Link></li>
                                <li className='mb-1'><Link title='Contact Us' to="/contact-us">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className='col-sm-6 col-md-4'>
                            <h5 className='mb-4'>CONTACT US</h5>
                            <div className='d-flex align-middle mb-3'>
                                <img src={location} alt='location' className='me-3 location'/>
                                <p className='mb-0'>6/71, Casa Major Road, Egmore, Chennai 600 008.</p>
                            </div>
                            <div className='d-flex align-middle mb-3'>
                                <img src={phone} alt='Phone' className='me-3 phone'/>
                                <p className='mb-0'>+452.87.9875</p>
                            </div>
                            <div className='d-flex align-middle'>
                                <img src={mail} alt='Mail' className='me-3 mail'/>
                                <p className='mb-0'>info@ldrsurveys.com</p>
                            </div>
                            <div className='socialIcons d-flex my-3'>
                                <Link title='Facebook' to="https://www.facebook.com/www.Landsurveys.in/?ref=pages_you_manage" target='_blank'>
                                    <img src={facebook} alt='Facebook' className='me-2' />
                                </Link>
                                <Link title='Linked In' to="https://www.linkedin.com/groups/13976846/" target='_blank'>
                                    <img src={linkedIn} alt='Linked In' className='mx-2'/>
                                </Link>
                                <Link title='Twitter' to="https://twitter.com/LdrLtd" target='_blank'>
                                    <img src={twitter} alt='Twitter' className='mx-2' />
                                </Link>
                                <Link title='Instagram' to="https://www.instagram.com/ldr_pvt_ltd/">
                                    <img src={instagram} alt='Instagram' className='ms-2' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='copyRight mt-3 py-3 mb-0 text-center'>Copyright © 2023 LDR Survey Pvt Ltd All Rights Reserved</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;