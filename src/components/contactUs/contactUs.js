import React from 'react';
import './contactUs.css';
import Header from '../navbar/navbar';
import Banner from '../banner/banner';
import Footer from '../footer/footer';
import contactBg from '../../assets/images/contactUsBg.jpg'
import { connect } from "react-redux";
import { contactUs } from '../../redux/actions/actions';
import location from '../../assets/images/location.svg';
import phone from '../../assets/images/phone.svg';
import mail from '../../assets/images/mail.svg';

const iniState = {
    user:{
        name:'',
        emailAddress:'',
        phoneNumber:'',
        location:'',
        message:'',
    },
    nameErr: null,
    emailAddressErr: null,
    phoneNumberErr: null,
    locationErr: null,
    messageErr: null,
    contactUsSubmit: null
}

class ContactUs extends React.Component {
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

        if(!this.state.user.location) this.setState({locationErr: "Please Enter Location"});
        else this.setState({locationErr: null});

        if(!this.state.user.message) this.setState({messageErr: "Please Enter Message"});
        else this.setState({messageErr: null});

        setTimeout(() => {
            var data = this.state.user;
            if(data.name && data.emailAddress && data.phoneNumber && data.location && data.message
                && this.state.emailAddressErr === null
            ){
                console.log(data);
                this.setState(iniState);
            }
        }, 500);
        
    }

    render(){
        return(
            <>
                <Header />
                <Banner title="Contact Us" backgroundImage={contactBg} />
                <div className='contactUs'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <h2>We'd love to hear from you.</h2>
                                <p>We are the best Land surveyors near you, we offer services like Topographical surveys, Layout surveys and Boundary surveys and more. In recent years, we had been benefiting landlords in settlements and we manage land surveyors in Chennai.</p>
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <div className='d-flex align-top mb-3'>
                                            <div>
                                                <img src={phone} alt='location' className='me-3 phone'/>
                                            </div>
                                            <div>
                                                {/* <h4>Phone</h4> */}
                                                <p className='mb-2'>+91 9940143131</p>
                                                <p className='mb-2'>+91 9840281288</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='d-flex align-top mb-3'>
                                        <div>
                                            <img src={mail} alt='location' className='me-3 mail'/>
                                        </div>
                                        <div>
                                            {/* <h4>Mail</h4> */}
                                            <p className='mb-2'>lands@landsurveys.in</p>
                                            <p className='mb-0'>lsit.rgn@gmail.com</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <form>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <label>Name</label>
                                            <div className='position-relative'>
                                                <input name='name' value={this.state.user.name} onChange={(e)=>this.changeHandler(e)}  type='text' placeholder='Full Name' className='mt-2 form-control' />
                                                {this.state.nameErr ? <p className='mb-0 formError'>{this.state.nameErr}</p> : ""}
                                            </div>
                                        </div>
                                        <div className='col-md-6 mt-3  mt-md-0'>
                                            <label>Email</label>
                                            <div className='position-relative'>
                                                <input name='emailAddress' value={this.state.user.emailAddress} onChange={(e)=>this.changeHandler(e)}  type='text' placeholder='Email Address' className='mt-2 form-control' />
                                                {this.state.emailAddressErr ? <p className='mb-0 formError'>{this.state.emailAddressErr}</p> : ""}
                                            </div>
                                        </div>
                                        <div className='col-md-6 mt-3'>
                                            <label>Number</label>
                                            <div className='position-relative'>
                                                <input name='phoneNumber' value={this.state.user.phoneNumber} onChange={(e)=>this.changeHandler(e)}  type='tel' placeholder='Phone Number' className='mt-2 form-control' />
                                                {this.state.phoneNumberErr ? <p className='mb-0 formError'>{this.state.phoneNumberErr}</p> : ""}
                                            </div>
                                        </div>
                                        <div className='col-md-6 mt-3'>
                                            <label>Location</label>
                                            <div className='position-relative'>
                                                <input name='location' value={this.state.user.location} onChange={(e)=>this.changeHandler(e)}  type='text' placeholder='Location' className='mt-2 form-control' />
                                                {this.state.locationErr ? <p className='mb-0 formError'>{this.state.locationErr}</p> : ""}
                                            </div>
                                        </div>
                                        <div className='col-md-12 mt-3 mb-1'>
                                            <label>Message</label>
                                            <div className='position-relative'>
                                                <textarea name='message' value={this.state.user.message} onChange={(e)=>this.changeHandler(e)}  placeholder='Message' className='mt-2 form-control' rows={4}></textarea>
                                                {this.state.messageErr ? <p className='mb-0 formError'>{this.state.messageErr}</p> : ""}
                                            </div>
                                        </div>
                                        <div className='col-md-12 mt-4'>
                                            <button className='btn'  onClick={(e)=>this.contactUs(e)}>Submit Now</button>
                                        </div>
                                        {this.state.signInSubmit ? <p className='mb-0 mt-2 text-center contactUsErr'>{this.state.signInSubmit}</p> : ""}
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-12'>
                                <iframe title='6/71, Casa Major Road, Egmore, Chennai 600 008.' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.4318330147557!2d80.2498152!3d13.0717958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52674db89c4b31%3A0xf7b30e91fe199e27!2sLDR%20Survey%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1702233155010!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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

ContactUs = connect(mapStateToProps, mapDispatchToProps)(ContactUs);

export default ContactUs;