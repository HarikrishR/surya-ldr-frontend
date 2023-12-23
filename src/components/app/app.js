import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import Index from '../index';
import AboutUs from '../aboutUs/aboutUs';
import Services from "../services/services";
import Products from "../products/products";
import ContactUs from "../contactUs/contactUs";
import SignIn from "../signIn/signIn";
import SignUp from "../signUp/signUp";
import SampleSketches from "../sampleSketches/sampleSketches";
import DashBoard from '../admin/dashBoard/dashBoard';
import LandSurvey from '../services/landSurvey';
import PropertySurvey from '../services/propertySurvey';
import LayoutSurvey from '../services/layoutSurvey';
import BuildPlanSurvey from '../services/buildPlanSurvey';
import InteriorSurvey from '../services/interiorDesign';
import RealEstateSurvey from '../services/realEstateSurvey';
import DigitalSurvey from '../services/digitalSurvey';
import FMBSketches from '../services/fmbSketches';
import Career from '../career/career';
import BoundarySurvey from '../mappingService/boundarySurvey';
import BoundaryFixingSurvey from '../mappingService/boundaryFixingSurvey';
import FMBDrawing from '../mappingService/fmbDrawing';
import PageNotFound from '../pageNotFound/pageNotFound';
import { connect } from "react-redux";
import { userDataRes, isAuthenticatedRes } from '../../redux/actions/actions';
import Cookies from 'js-cookie';
import TopographicalSurvey from '../mappingService/topographicalSurvey';
import ContourSurvey from '../mappingService/contourSurvey';
import LayoutDesignMarking from '../mappingService/layoutDesignMarking';
import RoadSurvey from '../mappingService/roadSurvey';
import BuildingMarking from '../mappingService/buildingMarking';
import DroneSurvey from '../mappingService/droneSurvey';
import DgpsSruvey from '../mappingService/dgpsSurvey';

class Application extends React.Component {
    constructor(){
        super();
        this.state = {
        }
    }

    componentDidMount(){
        if(Cookies.get('auth')){
            this.props.fetchUserData(JSON.parse(Cookies.get('auth')));
            this.props.fetchIsAuthenticatedData(true);
        }
        else{
            this.props.fetchUserData(null);
            this.props.fetchIsAuthenticatedData(false);
        }
    }

    logout = () => {
        Cookies.remove('auth');
        window.location.replace('/');
    }

    render(){
        return(
            <Router>
                <Routes>
                    <Route exact path="/" element={<Index />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/sample-sketches" element={<SampleSketches />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/land-survey" element={<LandSurvey />} />
                    <Route path="/property-survey" element={<PropertySurvey />} />
                    <Route path="/layout-survey" element={<LayoutSurvey />} />
                    <Route path="/build-plan" element={<BuildPlanSurvey />} />
                    <Route path="/interior-survey" element={<InteriorSurvey />} />
                    <Route path="/real-estate" element={<RealEstateSurvey />} />
                    <Route path="/digital-survey" element={<DigitalSurvey />} />
                    <Route path="/fmb-sketches" element={<FMBSketches />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/boundary-survey" element={<BoundarySurvey />} />
                    <Route path="/boundary-fixing-surveying" element={<BoundaryFixingSurvey />} />
                    <Route path="/fmb-drawing" element={<FMBDrawing />} />
                    {/* <Route path="/dashboard" element={<DashBoard />} /> */}
                    {/* <Route path="/products" element={<Products />} /> */}
                    {/* <Route path="/sign-in" element={<SignIn />} /> */}
                    {/* <Route path="/sign-up" element={<SignUp />} /> */}
                    <Route path="/404" element={<PageNotFound />} />
                    <Route path="*" element={<Navigate to="/404" />} />
                    <Route path="/topographical-survey" element={<TopographicalSurvey/>}/>
                    <Route path="/contour-survey" element={<ContourSurvey/>}/>
                    <Route path="/layout-design-marking" element={<LayoutDesignMarking/>}/>
                    <Route path="/road-survey" element={<RoadSurvey/>}/>
                    <Route path="/building-marking" element={<BuildingMarking/>}/>
                    <Route path="/drone-survey" element={<DroneSurvey/>}/>
                    <Route path="/dgps-survey" element={<DgpsSruvey/>}/>
                    {
                        this.props.isAuthenticated ? 
                        <>
                            <Route path="/sign-in" element={<Index />} />
                            <Route path="/sign-up" element={<Index />} />
                            <Route path="/products" element={<Products />} />
                        </>
                        :
                        <>
                            <Route path="/sign-in" element={<SignIn />} />
                            <Route path="/sign-up" element={<SignUp />} />
                            <Route path="/products" element={<SignIn />} />
                        </>
                        
                    }
                    {
                        (this.props.isAuthenticated && this.props.userData.role === "admin") ? 
                        <>
                            <Route path="/dashboard" element={<DashBoard />} />
                        </>
                        :
                        <>
                            <Route exact path="/" element={<Index />} />
                        </>
                        
                    }
                </Routes>
            </Router>
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

Application = connect(mapStateToProps, mapDispatchToProps)(Application);

export default Application;