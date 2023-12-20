import React from 'react';
import { Link } from "react-router-dom";
import Header from '../navbar/navbar';
import Banner from '../banner/banner';
import Footer from '../footer/footer';
import './services.css';
import servicesBg from '../../assets/images/servicesBg.jpg'
import landSurvey from '../../assets/images/services/landsurvey.webp'
import topoGraphical from '../../assets/images/services/topographical.webp'
import propertySurvey from '../../assets/images/services/propertySurvey.webp'
import reSurvey from '../../assets/images/services/reSurvey.webp'
import bpSurvey from '../../assets/images/services/bpSurvey.webp'
import dSurvey from '../../assets/images/services/dSurvey.webp'
import idSurvey from '../../assets/images/services/idSurvey.jpg'
import loSurvey from '../../assets/images/services/loSurvey.jpeg'
import fmb from '../../assets/images/services/fmb.png'


class Services extends React.Component {

    render(){
        return(
            <>
                <Header />
                <Banner title="Services" backgroundImage={servicesBg}/>
                <div className='services'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 col-lg-4 mb-4'>
                                <div className="servicesBoxContainer">
                                    <img src={landSurvey} alt="Land Survey" className="img" />
                                    <Link title='Land Survey' to="/land-survey">
                                        <div className="overlay">
                                            <div className="text text-center ">
                                                <h3 className='mb-3'>Land Survey</h3>
                                                <p className='mb-0'>Accurate land surveys provide essential boundary information for property ownership and development, ensuring legal compliance and preventing disputes.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-4 mb-4'>
                                <div className="servicesBoxContainer">
                                    <img src={topoGraphical} alt="Topographical Survey" className="img" />
                                    <Link title='Topographical Survey' to="/topographical-survey">
                                        <div className="overlay">
                                            <div className="text text-center ">
                                                <h3 className='mb-3'>Topographical Survey</h3>
                                                <p className='mb-0'>Topographical surveys provide essential land elevation data for informed planning and construction. Enhance project precision with our topographical surveying services.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-4 mb-4'>
                                <div className="servicesBoxContainer">
                                    <img src={propertySurvey} alt="Property Survey" className="img" />
                                    <Link title='Property Survey' to="/property-survey">
                                        <div className="overlay">
                                            <div className="text text-center ">
                                                <h3 className='mb-3'>Property Survey</h3>
                                                <p className='mb-0'>Property survey services provide essential boundary clarity and legal compliance for seamless transactions and development. Trust our expert team for comprehensive property surveys.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-4 mb-4'>
                                <div className="servicesBoxContainer">
                                    <img src={loSurvey} alt="Layout Survey" className="img" />
                                    <Link title='Layout Survey' to="/layout-survey">
                                        <div className="overlay">
                                            <div className="text text-center ">
                                                <h3 className='mb-3'>Layout Survey</h3>
                                                <p className='mb-0'>Optimize your property's potential with a thorough layout survey, ensuring precise dimensions and planning accuracy for efficient development.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-4 mb-4'>
                                <div className="servicesBoxContainer">
                                    <img src={bpSurvey} alt="Building Plan Survey" className="img" />
                                    <Link title='Building Plan Survey' to="/build-plan">
                                        <div className="overlay">
                                            <div className="text text-center ">
                                                <h3 className='mb-3'>Building Plan Survey</h3>
                                                <p className='mb-0'>Explore our comprehensive proposed building plans survey services to ensure accurate and compliant designs for your project's success. Our expertise guarantees precise planning and execution.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-4 mb-4'>
                                <div className="servicesBoxContainer">
                                    <img src={idSurvey} alt="Interior Survey" className="img" />
                                    <Link title='Interior Survey' to="/interior-survey">
                                        <div className="overlay">
                                            <div className="text text-center ">
                                                <h3 className='mb-3'>Interior Survey</h3>
                                                <p className='mb-0'>Optimize your space with precision through interior surveys, ensuring efficient layouts and design enhancements for your property.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-4 mb-4'>
                                <div className="servicesBoxContainer">
                                    <img src={reSurvey} alt="Real Estate Survey" className="img" />
                                    <Link title='Real Estate Survey' to="/real-estate">
                                        <div className="overlay">
                                            <div className="text text-center ">
                                                <h3 className='mb-3'>Real Estate Survey</h3>
                                                <p className='mb-0'>Enhance property transactions and avoid boundary disputes with accurate real estate surveys. Our professional services ensure precise property measurements and legal compliance.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-4 mb-4'>
                                <div className="servicesBoxContainer">
                                    <img src={dSurvey} alt="Digital Survey" className="img" />
                                    <Link title='Digital Survey' to="/digital-survey">
                                        <div className="overlay">
                                            <div className="text text-center ">
                                                <h3 className='mb-3'>Digital Survey</h3>
                                                <p className='mb-0'>The main instrument we use for Digital Survey like Total Station, DGPS, Drone and Hand Disto meter. We can find out whether the area is encroached, with the help of digital mapping.</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-4 mb-4'>
                                <div className="servicesBoxContainer">
                                    <img src={fmb} alt="Combined FMB Sketches" className="img" />
                                    <Link title='Combined FMB Sketches' to="/fmb-sketches">
                                        <div className="overlay">
                                            <div className="text text-center ">
                                                <h3 className='mb-3'>Combined FMB Sketches</h3>
                                                <p className='mb-0'>The Field Measurement Book (FMB) sketch, compiled by Government authorities at Village Administrative Offices, holds vital map data.  FMB plays a pivotal role in ensuring accuracy in land transactions.</p>
                                            </div>
                                        </div>
                                    </Link>
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

export default Services;