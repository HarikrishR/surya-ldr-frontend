import React from 'react';
import './signUp.css';
import Header from '../navbar/navbar';
import Footer from '../footer/footer';
import { Link } from "react-router-dom";
import eyeShow from "../../assets/images/eyeShow.png";
import eyeHide from "../../assets/images/eyeHide.png";
import { connect } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import { signUp, signUpRes } from '../../redux/actions/actions';

const iniState = {
    passwordShow : false,
    user:{
        userName:'',
        emailAddress:'',
        phoneNumber:'',
        password:'',
        role:'user'
    },
    userNameErr: null,
    emailAddressErr: null,
    phoneNumberErr: null,
    passwordErr: null,
    signUpSubmit: null,
    showModal: false
}

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = iniState
    }

    passwordShowHide = () => {
        this.state.passwordShow ? this.setState({passwordShow : false}) : this.setState({passwordShow : true})
    }

    changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            user:{
              ...this.state.user,
              [name]: value
            }
        });
    }

    signUp = (e) =>{
        e.preventDefault();
        if(!this.state.user.userName) this.setState({userNameErr: "Please Enter User Name"});
        else this.setState({userNameErr: null});

        if(!this.state.user.phoneNumber) this.setState({phoneNumberErr: "Please Enter Phone Number"});
        else if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(this.state.user.phoneNumber))
            this.setState({phoneNumberErr: "Please Enter valid Phone Number"});
        else this.setState({phoneNumberErr: null});

        if(!this.state.user.emailAddress) 
            this.setState({emailAddressErr: "Please Enter Email Address"});
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.user.emailAddress))
            this.setState({emailAddressErr: "Please Enter valid Email"});
        else this.setState({emailAddressErr: null});

        if(!this.state.user.password) this.setState({passwordErr: "Please Enter Password"});
        else this.setState({passwordErr: null});

        setTimeout(() => {
            var data = this.state.user;
            if(data.userName && data.phoneNumber && data.emailAddress && data.password
                && this.state.emailAddressErr === null && this.state.phoneNumberErr === null){
                this.props.fetchSignUp(data);
            }
        }, 500);
    }

    componentDidUpdate(){
        if(this.props.signUpRes){
            this.setState(iniState);
            if(this.props.signUpRes.status === 400)
                this.setState({signUpSubmit: this.props.signUpRes.message})
            else {
                this.setState({signUpSubmit: null, showModal:true});
            }
            this.props.fetchSignUpRes(null);
        }
    }

    render(){
        return(
            <>
                <Header />
                <div className="signUp">
                    <div className="container">
                        <div className='row'>
                            <div className='offset-md-3 col-md-6'>
                                <h3 className='mb-4 text-center'>Sign Up</h3>
                                <form>
                                    <label>User Name</label>
                                    <div className='position-relative'>
                                        <input name='userName' value={this.state.user.userName} onChange={(e)=>this.changeHandler(e)} type='email' placeholder='Enter User Name' className='mt-2 mb-4 form-control' />
                                        {this.state.userNameErr ? <p className='mb-0 formError'>{this.state.userNameErr}</p> : ""}
                                    </div>                                    
                                    <label>Phone Number</label>
                                    <div className='position-relative'>
                                        <input name='phoneNumber' value={this.state.user.phoneNumber} onChange={(e)=>this.changeHandler(e)} type='number' placeholder='Enter Phone Number' className='mt-2 mb-4 form-control' />
                                        {this.state.phoneNumberErr ? <p className='mb-0 formError'>{this.state.phoneNumberErr}</p> : ""}
                                    </div>
                                    <label>Email</label>
                                    <div className='position-relative'>
                                        <input name='emailAddress' value={this.state.user.emailAddress} onChange={(e)=>this.changeHandler(e)} type='email' placeholder='Enter Email Address' className='mt-2 mb-4 form-control' />
                                        {this.state.emailAddressErr ? <p className='mb-0 formError'>{this.state.emailAddressErr}</p> : ""}
                                    </div>
                                    <label>Password</label>
                                    <div className='position-relative'>
                                        <input name='password' value={this.state.user.password} onChange={(e)=>this.changeHandler(e)} type={this.state.passwordShow ? 'text' : 'password'} placeholder='Enter Password' className='mt-2 form-control' />
                                        <div className='position-absolute showHide'>
                                            <img src={this.state.passwordShow ? eyeHide : eyeShow} onClick={()=> this.passwordShowHide()} alt='Show' />
                                        </div>
                                        {this.state.passwordErr ? <p className='mb-0 formError'>{this.state.passwordErr}</p> : ""}
                                    </div>
                                    <button className='btn mt-4' onClick={(e)=>this.signUp(e)}>Sign Up</button>
                                </form>
                                {this.state.signUpSubmit ? <p className='mb-0 mt-2 text-center signUpErr'>{this.state.signUpSubmit}</p> : ""}
                                <hr className='my-4'/>
                                <p className='mb-0 text-center'>Already have an account <Link title='Home' to="/sign-in" className=''>Sign In</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.showModal} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Body className='text-center py-4'>
                        <h4 className='mb-3'>Sign Up Success</h4>
                        <p>Please click below button to sign in.</p>
                        <Link title='Sign In' to="/sign-in" className='btn'>Sign In</Link>
                    </Modal.Body>
                </Modal>
                <Footer />
            </>
        )
    }
}

function mapStateToProps(state){
    return{
        signUpRes : state.signUpData
    }
}

const mapDispatchToProps = dispatch => {
    const extraProps = {
        fetchSignUp: (data)=>{
            dispatch(signUp(data))
        },
        fetchSignUpRes: (val)=> {
            dispatch(signUpRes(val))
        }
    }
    return extraProps;
}

SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignUp;