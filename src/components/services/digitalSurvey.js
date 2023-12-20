import React from 'react';
import Header from '../navbar/navbar';
import Footer from '../footer/footer';
import SurveyBanner from './surveyBanner';
import SurveySidebar from './surveySidebar';
import './services.css';

class DigitalSurvey extends React.Component {

    render(){
        return(
            <>
                <Header />
                    <SurveyBanner description="The main instruments we use for digital land survey are the total station, DGPS, drone, and hand-held distance meter. With the help of digital mapping, we can determine the exact shape and area of the current land or your used area, as well as whether the area is encroached upon."/>
                    <div className='surveyLayout'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-8 mb-4 mb-md-0'>
                                    <div className='survey'>
                                        <h3 className='mb-3'>Digital Survey</h3>
                                        <p>Digital Land Survey is the arrangement of deciding the earthly or three-dimensional Position of focuses and distances and points between them with the assistance of LIDAR, UAV (Unmanned Aerial Vehicle), GPS (Global Positioning Satellite), and planning programming is known as a digital land survey.</p>
                                        <p>LDR Survey Pvt Ltd is one of the Leading and most experienced Best Digital Land Survey Company services in Chennai. We have a long tradition of strong execution and enduring client connections worked alongside quality services.</p>
                                        <p className='mb-4'>LDR Survey Pvt Ltd has the experience, technical resources, and worldwide capacity to enable excellent performance on any Land Survey projects includes (Indoor Service (Digital Photogrammetry, LIDAR, Mobile LIDAR, GIS, CAD, PLS CAD, Remote Sensing, etc.) Outdoor Services (Total Station/DGPS Survey, Boundary survey, Drain survey, Layout survey, DPR Survey, ATS Survey, Hand GPS Survey, UAV (DRONE Survey) etc.) Industries (Forest, oil & Gas, Railway, and Networking). Our staffs include surveyors, pilots, Civil engineers, Photogrammetrists, as well as mapping analyst and GIS specialists</p>
                                        <h4>The digital survey company that focus on strategy</h4>
                                        <p className='mb-0'>LDR Survey Pvt Ltd provides the best digital Land survey services in Chennai. we have been implementing the best practice of digital Land survey to all the clients across the landscape.</p>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <SurveySidebar />
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </>
        )
    }
}

export default DigitalSurvey;