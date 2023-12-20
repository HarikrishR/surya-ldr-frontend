import React from 'react';
import './signIn.css';
import Header from '../navbar/navbar';
import Footer from '../footer/footer';
import { Link } from "react-router-dom";
import eyeShow from "../../assets/images/eyeShow.png";
import eyeHide from "../../assets/images/eyeHide.png";
import { connect } from "react-redux";
import { signIn, signInRes } from '../../redux/actions/actions';
import Cookies from 'js-cookie';

const iniState = {
    passwordShow : false,
    user:{
        userName:'',
        password:''
    },
    userNameErr: null,
    passwordErr: null,
    signInSubmit: null
}

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = iniState;
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
            },
        });
    }

    signIn = (e) =>{
        e.preventDefault();
        if(!this.state.user.userName) this.setState({userNameErr: "Please Enter User Name"});
        else this.setState({userNameErr: null});

        if(!this.state.user.password) this.setState({passwordErr: "Please Enter Password"});
        else this.setState({passwordErr: null});

        var data = this.state.user;
        if(data.userName && data.password){
            this.props.fetchSignIn(data.user);
            this.setState(iniState);
        }
    }

    componentDidUpdate(){
        if(this.props.signInRes){
            if(this.props.signInRes.status === 400)
                this.setState({signInSubmit: this.props.signInRes.message})
            else {
                this.setState({signInSubmit: null});
                this.authenticateUser(this.props.signInRes.message[0]);
            }
            this.props.fetchSignInRes(null);
        }
    }

    authenticateUser = (user) => {
          const userData = user;
          const expirationTime = new Date(new Date().getTime() + 60000 * 60);
          Cookies.set('auth', JSON.stringify(userData), { expires: expirationTime });
          window.location.replace('/');
    };

    render(){
        return(
            <>
                <Header />
                <div className="signIn">
                    <div className="container">
                        <div className='row'>
                            <div className='offset-md-3 col-md-6'>
                                <div className='signInNox'>
                                    <h3 className='mb-4 text-center'>Sign In</h3>
                                    <form>
                                        <label>User Name</label>
                                        <div className='position-relative'>
                                            <input name='userName' value={this.state.user.userName} onChange={(e)=>this.changeHandler(e)} type='text' placeholder='Enter User Name' className='mt-2 mb-4 form-control' />
                                            {this.state.userNameErr ? <p className='mb-0 formError'>{this.state.userNameErr}</p> : ""}
                                        </div>
                                        <label>Password</label>
                                        <div className='position-relative'>
                                            <input name='password' value={this.state.user.password} onChange={(e)=>this.changeHandler(e)} type={this.state.passwordShow ? 'text' : 'password'} placeholder='Enter Password' className='mt-2 form-control' />
                                            <div className='position-absolute showHide'>
                                                <img src={this.state.passwordShow ? eyeHide : eyeShow} onClick={()=> this.passwordShowHide()} alt='Show' />
                                            </div>
                                            {this.state.passwordErr ? <p className='mb-0 formError'>{this.state.passwordErr}</p> : ""}
                                        </div>
                                        <button className='btn mt-4' onClick={(e)=>this.signIn(e)}>Sign In</button>
                                    </form>
                                    {this.state.signInSubmit ? <p className='mb-0 mt-2 text-center signUpErr'>{this.state.signInSubmit}</p> : ""}
                                    <hr className='my-4'/>
                                    <p className='mb-0 text-center'>Don't have an account <Link title='Home' to="/sign-up" className=''>Sign Up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

function mapStateToProps(state){
    return{
        signInRes : state.signInData
    }
}

const mapDispatchToProps = dispatch => {
    const extraProps = {
        fetchSignIn: (data)=>{
            dispatch(signIn(data))
        },
        fetchSignInRes: (val)=> {
            dispatch(signInRes(val))
        }
    }
    return extraProps;
}

SignIn = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default SignIn;