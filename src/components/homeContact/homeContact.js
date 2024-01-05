import React from 'react';
import { connect } from "react-redux";
import { career, careerRes } from '../../redux/actions/actions';
import Modal from 'react-bootstrap/Modal';
import {
    Country,
    State,
    City,
  } from "country-state-city";

const iniState = {
    user:{
        name:'',
        phoneNumber:'',
        service:'',
        state:'',
        city:'',
    },
    nameErr: null,
    phoneNumberErr: null,
    serviceErr: null,
    stateErr: null,
    cityErr: null,
    indexSubmit: null,
    showModal: false,
    countryCode: 'IN',
    stateCodeCode: null,
    stateList: [],
    cityList: []
}

class HomeContact extends React.Component {
    constructor(){
        super();
        this.state = iniState
    }

    changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if(name !== 'state'){
            this.setState({
                user:{
                  ...this.state.user,
                  [name]: value
                },
            });
        }
        if(name === 'state'){
            var stateCode = "";
            this.state.stateList.find((val, index) => {
                if(val.name === value)
                    stateCode = val.isoCode
            })
            var state = State.getStateByCodeAndCountry(stateCode, 'IN');
            var city = City.getCitiesOfState('IN', stateCode)
            setTimeout(() => {
                console.log(state.name);
                this.setState({
                    user:{
                      ...this.state.user,
                      [name]: state.name
                    },
                    cityList: city
                });
            }, 250);
        }
    }
    indexSubmit = (e) =>{
        e.preventDefault();
        if(!this.state.user.name) this.setState({nameErr: "Please Enter Name"});
        else this.setState({nameErr: null});
        if(!this.state.user.phoneNumber) this.setState({phoneNumberErr: "Please Enter Phone Number"});
        else this.setState({phoneNumberErr: null});
        if(!this.state.user.state) this.setState({stateErr: "Please Select State"});
        else this.setState({stateErr: null});
        if(!this.state.user.city) this.setState({cityErr: "Please Select City"});
        else this.setState({cityErr: null});
        if(!this.state.user.service) this.setState({serviceErr: "Please Select Service"});
        else this.setState({serviceErr: null});
        setTimeout(() => {
            var data = this.state.user;
            if(data.name && data.phoneNumber && data.state && data.city && data.service
                && this.state.phoneNumberErr === null
            ){
                console.log(data);
            }
        }, 500);
    }

    componentDidMount(){
        this.setState({
            stateList: State.getStatesOfCountry('IN')
        })
    }

    render(){
        return(
            <>
                <form>
                    <div className='position-relative pb-3'>
                        <input name='name' value={this.state.user.name} type='text' onChange={(e)=>this.changeHandler(e)} placeholder='Full Name' className='mt-2 form-control' />
                        {this.state.nameErr ? <p className='mb-0 formError'>{this.state.nameErr}</p> : ""}
                    </div>
                    <div className='position-relative pb-3'>
                        <input name='phoneNumber' value={this.state.user.phoneNumber} type='text' onChange={(e)=>this.changeHandler(e)} placeholder='Phone Number' className='mt-2 form-control' />{this.state.phoneNumberErr ? <p className='mb-0 formError'>{this.state.phoneNumberErr}</p> : ""}
                    </div>
                    <div className='position-relative pb-3'>
                        <select name="service" className="mt-2 form-select" value={this.state.user.service} onChange={(e)=>this.changeHandler(e)}>
                            <option value="" disabled>Select Service</option>
                            <option value="land survey">Land Survey</option>
                            <option value="topograpical survey">Topographical Survey</option>
                            <option value="property survey">Property Survey</option>
                            <option value="layout survey">Layout Survey</option>
                            <option value="build plan survey">Building Plan Survey</option>
                            <option value="interior survey">Interior Survey</option>
                            <option value="real estate survey">Real Estate Survey</option>
                            <option value="digitalsurvey">Digital Survey</option>
                            <option value="combined fmb sketches">Combined FMB Sketeches</option>
                        </select>
                        {this.state.serviceErr ? <p className='mb-0 formError'>{this.state.serviceErr}</p> : ""}
                    </div>
                    <div className='position-relative pb-3'>
                        <select name="state" className="mt-2 form-select" value={this.state.user.state} onChange={(e)=>this.changeHandler(e)}>
                            <option value="" disabled>Select State</option>
                            {
                                this.state.stateList.map((item, index) => (
                                <option key={index} value={item.name}>
                                    {item.name}
                                </option>
                                ))
                            }
                        </select>
                        {this.state.stateErr ? <p className='mb-0 formError'>{this.state.stateErr}</p> : ""}
                    </div>
                    <div className='position-relative pb-3' value="">
                        <select name="city" className="mt-2 form-select" value={this.state.user.city} onChange={(e)=>this.changeHandler(e)}>
                            <option value="" disabled>Select City</option>
                            {
                                this.state.cityList.map((item, index) => (
                                <option key={index} value={item.name}>
                                    {item.name}
                                </option>
                                ))
                            }
                        </select>
                        {this.state.cityErr ? <p className='mb-0 formError'>{this.state.cityErr}</p> : ""}
                    </div>
                    <button className="btn mt-2" onClick={(e)=>this.indexSubmit(e)}>Submit</button>
                </form>
            </>
        )
    }
}

function mapStateToProps(state){
    return{
        careerRes : state.careerData
    }
}

const mapDispatchToProps = dispatch => {
    const extraProps = {
        fetchCareer: (data)=>{
            dispatch(career(data))
        },
        fetchCareerRes: (data)=>{
            dispatch(careerRes(data))
        }
    }
    return extraProps;
}

HomeContact = connect(mapStateToProps, mapDispatchToProps)(HomeContact);

export default HomeContact;