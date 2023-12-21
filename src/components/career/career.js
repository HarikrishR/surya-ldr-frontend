import React from 'react';
import './career.css';
import Header from '../navbar/navbar';
import Banner from '../banner/banner';
import Footer from '../footer/footer';
import careerBg from '../../assets/images/careerBg.jpg'
import { connect } from "react-redux";
import { contactUs } from '../../redux/actions/actions';

const iniState = {
    user:{
        name:'',
        emailAddress:'',
        phoneNumber:'',
        gender:'',
        dob:'',
        address:'',
        role:'',
        experience:'',
        ctc:'',
        cv:'',
    },
    nameErr: null,
    emailAddressErr: null,
    phoneNumberErr: null,
    genderErr: null,
    dobErr: null,
    addressErr: null,
    roleErr: null,
    experienceErr: null,
    ctcErr: null,
    cvErr: null,
    contactUsSubmit: null
}

class Career extends React.Component {
    constructor(){
        super();
        this.state = iniState
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

    contactUs = (e) =>{
        e.preventDefault();
        if(!this.state.user.name) this.setState({nameErr: "Please Enter Name"});
        else this.setState({nameErr: null});

        if(!this.state.user.emailAddress) 
            this.setState({emailAddressErr: "Please Enter Email Address"});
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.user.emailAddress))
            this.setState({emailAddressErr: "Please Enter valid Email"});
        else this.setState({emailAddressErr: null});

        if(!this.state.user.phoneNumber) this.setState({phoneNumberErr: "Please Enter Phone Number"});
        else this.setState({phoneNumberErr: null});

        if(!this.state.user.dob) this.setState({dobErr: "Please Select Date"});
        else this.setState({dobErr: null});

        if(!this.state.user.gender) this.setState({genderErr: "Please Select Gender"});
        else this.setState({genderErr: null});

        if(!this.state.user.address) this.setState({addressErr: "Please Enter Address"});
        else this.setState({addressErr: null});

        if(!this.state.user.role) this.setState({roleErr: "Please Select Role"});
        else this.setState({roleErr: null});

        if(!this.state.user.experience) this.setState({experienceErr: "Please Select Experience"});
        else this.setState({experienceErr: null});

        if(!this.state.user.ctc) this.setState({ctcErr: "Please Enter CTC"});
        else this.setState({ctcErr: null});

        if(!this.state.user.cv) this.setState({cvErr: "Please Select CV"});
        else this.setState({cvErr: null});

        var data = this.state.user;
        if(data.name && data.emailAddress && data.phoneNumber && data.dob && data.address && data.role && data.experience
            && data.ctc && data.cv && this.state.emailAddressErr === null
        ){
            console.log(this.state.user);
            this.setState(iniState);
        }
    }

    render(){
        return(
            <>
                <Header />
                <Banner title="Welcome to the LDR Life" backgroundImage={careerBg} />
                <div className='career'>
                    <div className='container'>
                        <h4 className='text-center mb-5'>We're so glad you're interested in a career at <span className='actionColorOne'>LDR</span>!</h4>
                        <div className='row'>
                            <div className='offset-md-2 col-md-8'>
                                <form>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <label>Name</label>
                                            <div className='position-relative'>
                                                <input name='name' value={this.state.user.name} onChange={(e)=>this.changeHandler(e)}  type='text' placeholder='Please Enter Full Name' className='mt-2 form-control' />
                                                {this.state.nameErr ? <p className='mb-0 formError'>{this.state.nameErr}</p> : ""}
                                            </div>
                                        </div>
                                        <div className='col-md-6 mt-3  mt-md-0'>
                                            <label>Email</label>
                                            <div className='position-relative'>
                                                <input name='emailAddress' value={this.state.user.emailAddress} onChange={(e)=>this.changeHandler(e)}  type='text' placeholder='Please Enter Email Address' className='mt-2 form-control' />
                                                {this.state.emailAddressErr ? <p className='mb-0 formError'>{this.state.emailAddressErr}</p> : ""}
                                            </div>
                                        </div>
                                        <div className='col-md-6 mt-3'>
                                            <label>Number</label>
                                            <div className='position-relative'>
                                                <input name='phoneNumber' value={this.state.user.phoneNumber} onChange={(e)=>this.changeHandler(e)}  type='tel' placeholder='Please Enter Phone Number' className='mt-2 form-control' />
                                                {this.state.phoneNumberErr ? <p className='mb-0 formError'>{this.state.phoneNumberErr}</p> : ""}
                                            </div>
                                        </div>
                                        <div className='col-md-6 mt-3'>
                                            <label>Date of Birth</label>
                                            <div className='position-relative'>
                                                <input name='dob' value={this.state.user.dob} onChange={(e)=>this.changeHandler(e)}  type='date' placeholder='Please Select Date' className='mt-2 form-control' />
                                                {this.state.dobErr ? <p className='mb-0 formError'>{this.state.dobErr}</p> : ""}
                                            </div>
                                        </div>
                                        <div className='col-md-6 mt-3'>
                                            <label>Gender</label>
                                            <div className='position-relative'>
                                                <select name='gender' value={this.state.user.gender} onChange={(e)=>this.changeHandler(e)}  className='mt-2 form-select'  >
                                                    <option value="" disabled>Please Select Gender</option>
                                                    <option value="male>">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                                {this.state.genderErr ? <p className='mb-0 formError'>{this.state.genderErr}</p> : ""}
                                            </div>
                                        </div>
                                        <div className='col-md-6 mt-3'>
                                            <label>Preferred Role</label>
                                            <div className='position-relative'>
                                                <select name='role' value={this.state.user.role} onChange={(e)=>this.changeHandler(e)}  className='mt-2 form-select'  >
                                                    <option value="" disabled>Please Select Role</option>
                                                    <option value="web designer">Web Designer</option>
                                                    <option value="junior survivor">Junior Survivor</option>
                                                    <option value="drafting autocad">Drafting Autocad</option>
                                                    <option value="senior survivor">Senior Survivor</option>
                                                    <option value="SEO gigital marketing">SEO Digital Marketing</option>
                                                    <option value="admin">Admin</option>
                                                    <option value="civil engineer">Civil Engineer</option>
                                                    <option value="accountant">Accountant</option>
                                                    <option value="marketing">Marketing</option>
                                                </select>
                                                {this.state.roleErr ? <p className='mb-0 formError'>{this.state.roleErr}</p> : ""}
                                            </div>
                                        </div>
                                        <div className='col-md-6 mt-3'>
                                            <label>Experience</label>
                                            <div className='position-relative'>
                                                <select name='experience' value={this.state.user.experience} onChange={(e)=>this.changeHandler(e)}  className='mt-2 form-select'  >
                                                    <option value="" disabled>Please Select Experience</option>
                                                    <option value="0-1>">Less than 1 year</option>
                                                    <option value="1-2">1 - 2 Years</option>
                                                    <option value="2-3">2 - 3 Years</option>
                                                    <option value="3-4">3 - 4 Years</option>
                                                    <option value="4-5">4 - 5 Years</option>
                                                    <option value="5-above">Above 5 Years</option>
                                                </select>
                                                {this.state.experienceErr ? <p className='mb-0 formError'>{this.state.experienceErr}</p> : ""}
                                            </div>
                                        </div>
                                        <div className='col-md-6 mt-3'>
                                            <label>CTC</label>
                                            <div className='position-relative'>
                                                <input name='ctc' value={this.state.user.ctc} onChange={(e)=>this.changeHandler(e)}  type='tel' placeholder='Please Enter CTC' className='mt-2 form-control' />
                                                {this.state.ctcErr ? <p className='mb-0 formError'>{this.state.ctcErr}</p> : ""}
                                            </div>
                                        </div>
                                        <div className='col-md-12 mt-3'>
                                            <label>Address</label>
                                            <div className='position-relative'>
                                                <textarea name='address' value={this.state.user.address} onChange={(e)=>this.changeHandler(e)}  placeholder='Please Enter Address' className='mt-2 form-control' rows={4}></textarea>
                                                {this.state.addressErr ? <p className='mb-0 formError'>{this.state.addressErr}</p> : ""}
                                            </div>
                                        </div>
                                        <div className='col-md-12 mt-3 mb-1'>
                                            <label>Resume</label>
                                            <div className='position-relative'>
                                                <input name='cv' value={this.state.user.cv} onChange={(e)=>this.changeHandler(e)}  type='file' placeholder='Please Enter CV' className='mt-2 form-control' />
                                                {this.state.cvErr ? <p className='mb-0 formError'>{this.state.cvErr}</p> : ""}
                                            </div>
                                        </div>
                                        <div className='col-md-12 mt-4'>
                                            <button className='btn'  onClick={(e)=>this.contactUs(e)}>Apply Now</button>
                                        </div>
                                        {this.state.signInSubmit ? <p className='mb-0 mt-2 text-center contactUsErr'>{this.state.signInSubmit}</p> : ""}
                                    </div>
                                </form>
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
        contactUsRes : state.contactUsData
    }
}

const mapDispatchToProps = dispatch => {
    const extraProps = {
        fetchContactUs: (data)=>{
            dispatch(contactUs(data))
        }
    }
    return extraProps;
}

Career = connect(mapStateToProps, mapDispatchToProps)(Career);

export default Career;