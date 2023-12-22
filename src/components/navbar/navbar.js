import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.webp';
import location from '../../assets/images/location.svg';
import phone from '../../assets/images/phone.svg';
import mail from '../../assets/images/mail.svg';
import upArrow from "../../assets/images/upArrow.png"
import './navbar.css';
import Cookies from 'js-cookie';
import { connect } from "react-redux";
import { userDataRes, isAuthenticatedRes } from '../../redux/actions/actions';
import AutoBot from '../autoBot/autoBot';

class Header extends React.Component {

    logout = () => {
        Cookies.remove('auth');
        this.props.fetchUserData(null);
        this.props.fetchIsAuthenticatedData(false);
    }

    render(){
        return(
            <div className='header px-4'>
                <div className='row navTop py-2 d-none d-md-flex' id='navbar'>
                    <div className='col-md-6'>
                        <div className='d-flex align-middle'>
                            <img src={location} alt='location' className='me-2'/>
                            <p className='mb-0'>6/71, Casa Major Road, Egmore, Chennai 600 008.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='d-flex align-items-end justify-content-end'>
                            <div className='d-flex align-middle'>
                                <img src={phone} alt='Phone' className='me-2'/>
                                <p className='mb-0 me-3'>+452.87.9875</p>
                            </div>
                            <div className='d-flex align-middle'>
                                <img src={mail} alt='Mail' className='me-2'/>
                                <p className='mb-0'>info@ldrsurveys.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Navbar expand="lg" className="bg-body-tertiary py-3">
                    <Navbar.Brand href="/">
                        <img src={logo} alt='LDR Survey' className='logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Link title='Home' to="/" className='nav-link'>Home</Link>
                        <Link title='About Us' to="/about-us" className='nav-link'>About Us</Link>
                        <Link title='Services' to="/services" className='nav-link'>Services</Link>
                        <Link title='Products' to="/products" className='nav-link'>Products</Link>
                        <Link title='Sample Sketches' to="/sample-sketches" className='nav-link'>Sample Sketches</Link>
                        
                        {
                        this.props.isAuthenticated && this.props.userData.role === "admin" ? 
                        <Link title='Contact Us' to="/dashboard" className='nav-link'>Dashboard</Link>
                        :
                        <>
                            <Link title='Career' to="/career" className='nav-link'>Career</Link>
                            <Link title='Contact Us' to="/contact-us" className='nav-link'>Contact Us</Link>
                        </>
                        }
                    </Nav>
                    {
                        this.props.isAuthenticated ? 
                        <Link title='Profile' to="/profile" className='nav-link'>Hi <span>{this.props.userData.userName}!</span></Link>
                        :
                        ""
                    }
                    {
                        this.props.isAuthenticated ? 
                        <Link title='Logout' to="" onClick={()=>this.logout()} className='ms-lg-3 mt-2 mt-lg-0 btn'>Logout</Link>
                        :
                        <Link title='Sign In' to="/sign-in" className='ms-lg-3 btn'>Sign In</Link>
                    }
                    </Navbar.Collapse>
                </Navbar>
                {/* <a title='Scroll to top' href="#navbar">
                    <div className='scrollToTop'>
                        <img src={upArrow} alt='Move to Top' />
                    </div>
                </a> */}
                <AutoBot />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        isAuthenticated : state.isAuthenticated,
        userData : state.userData,
    }
}

const mapDispatchToProps = dispatch => {
    const extraProps = {
        fetchUserData: (data)=>{
            dispatch(userDataRes(data))
        },
        fetchIsAuthenticatedData: (data)=>{
            dispatch(isAuthenticatedRes(data))
        }
    }
    return extraProps;
}

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;