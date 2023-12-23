import React from 'react';
import './mappingService.css';
import Header from '../navbar/navbar';
import Banner from '../banner/banner';
import Footer from '../footer/footer'; 
import aboutUsBg from '../../assets/images/aboutUsBg.jpg';

const iniState = {
    user:{
        name:'',
        emailAddress:'',
        phoneNumber:'',
        planning:'',
        reason:'',
    },
    nameErr: null,
    emailAddressErr: null,
    phoneNumberErr: null,
    planningErr: null,
    reasonErr: null,
    surveySubmit: null
}

class FMBDrawing extends React.Component {
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

    submitNow = (e) =>{
        e.preventDefault();

        if(!this.state.user.name) this.setState({nameErr: "Please Enter Name"});
        else this.setState({nameErr: null});

        if(!this.state.user.emailAddress) 
            this.setState({emailAddressErr: "Please Enter Email Address"});
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.user.emailAddress))
            this.setState({emailAddressErr: "Please Enter valid Email"});
        else this.setState({emailAddressErr: null});

        if(!this.state.user.phoneNumber) this.setState({phoneNumberErr: "Please Enter Phone Number"});
        else if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(this.state.user.phoneNumber))
            this.setState({phoneNumberErr: "Please Enter valid Phone Number"});
        else this.setState({phoneNumberErr: null});

        if(!this.state.user.planning) this.setState({planningErr: "Please Select Plan"});
        else this.setState({planningErr: null});

        if(!this.state.user.reason) this.setState({reasonErr: "Please Select Reason"});
        else this.setState({reasonErr: null});

        setTimeout(() => {
            var data = this.state.user;
            if(data.name && data.emailAddress && data.phoneNumber && data.reason && data.planning
                && this.state.emailAddressErr === null && this.state.phoneNumberErr === null
            ){
                console.log(this.state.user);
                this.setState(iniState);
            }
        }, 500);
    }

    render(){
        return(
            <>
                <Header />
                <Banner title="FMB Drawing" backgroundImage={aboutUsBg} />
                <div className='mappingService'>
                    <div className='container'>
                        <div className='row'>
                            <div className='offset-md-2 col-md-8'>
                                <form>
                                    <div className='row'>
                                        <div className='col-md-6 mt-3 mt-md-0'>
                                            <label>Name</label>
                                            <div className='position-relative'>
                                                <input name='name' value={this.state.user.name} onChange={(e)=>this.changeHandler(e)}  type='text' placeholder='Please Enter Name' className='mt-2 form-control' />
                                                {this.state.nameErr ? <p className='mb-0 formError'>{this.state.nameErr}</p> : ""}
                                            </div>
                                        </div>
                                        <div className='col-md-6 mt-3 mt-md-0'>
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
                                            <label>When Planning to do it</label>
                                            <div className='position-relative'>
                                                <select name='planning' value={this.state.user.planning} onChange={(e)=>this.changeHandler(e)}  className='mt-2 form-select'  >
                                                    <option value="" disabled>Please Select Plan</option>
                                                    <option value="immediately>">Immediately</option>
                                                    <option value="between one week">Between One Week</option>
                                                    <option value="just rate checking">Just Rate Checking</option>
                                                </select>
                                                {this.state.planningErr ? <p className='mb-0 formError'>{this.state.planningErr}</p> : ""}
                                            </div>
                                        </div>
                                        <div className='col-md-6 mt-3'>
                                            <label>Reason For Survey</label>
                                            <div className='position-relative'>
                                                <select name='reason' value={this.state.user.reason} onChange={(e)=>this.changeHandler(e)}  className='mt-2 form-select'  >
                                                    <option value="" disabled>Please Select Reason</option>
                                                    <option value="our land boundary correct">Our Land Boundary Correct</option>
                                                    <option value="planning to develop">Planning To Develop</option>
                                                </select>
                                                {this.state.reasonErr ? <p className='mb-0 formError'>{this.state.reasonErr}</p> : ""}
                                            </div>
                                        </div>
                                        <div className='col-md-12 mt-4'>
                                            <button className='btn'  onClick={(e)=>this.submitNow(e)}>Submit Now</button>
                                        </div>
                                        {this.state.surveySubmit ? <p className='mb-0 mt-2 text-center contactUsErr'>{this.state.surveySubmit}</p> : ""}
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

export default FMBDrawing;