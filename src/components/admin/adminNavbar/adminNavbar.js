import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from '../../../assets/images/logo.webp';
import './adminNavbar.css';
import Cookies from 'js-cookie';
import { connect } from "react-redux";
import { userDataRes, isAuthenticatedRes } from '../../../redux/actions/actions';

class AdminHeader extends React.Component {

    logout = () => {
        Cookies.remove('auth');
        this.props.fetchUserData(null);
        this.props.fetchIsAuthenticatedData(false);
    }

    render(){
        return(
            <div className='adminHeader px-3'>
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
                    </Nav>
                    {
                        this.props.isAuthenticated ? 
                        <Link title='Profile' to="/profile" className='nav-link'>Hi <span>{this.props.userData.userName}!</span></Link>
                        :
                        ""
                    }
                    {
                        this.props.isAuthenticated ? 
                        <Link title='Logout' to="" onClick={()=>this.logout()} className='ms-3 btn'>Logout</Link>
                        :
                        <Link title='Sign In' to="/sign-in" className='ms-3 btn'>Sign In</Link>
                    }
                    </Navbar.Collapse>
                </Navbar>
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

AdminHeader = connect(mapStateToProps, mapDispatchToProps)(AdminHeader);

export default AdminHeader;