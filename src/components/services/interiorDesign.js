import React from 'react';
import Header from '../navbar/navbar';
import Footer from '../footer/footer';
import SurveyBanner from './surveyBanner';
import SurveySidebar from './surveySidebar';
import './services.css';

class InteriorSurvey extends React.Component {

    render(){
        return(
            <>
                <Header />
                    <SurveyBanner description="Interior Survey Basically Done For Helping The Architectural Development Of The Constructed Area In Any Building, It Gives The Exact Dimensions, Angular Displacements, And Any Projections Within The Construct Area."/>
                    <div className='surveyLayout'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-8 mb-4 mb-md-0'>
                                    <div className='survey'>
                                        <h3 className='mb-3'>Interior Survey</h3>
                                        <p className='mb-4'>Interior Survey is the art and science of build up the interior of a building to achieve a helpful and more aesthetically attractive environment for the people using the location. An interior Surveyor is someone who plans, research, coordinates, and manages such improvement projects. Interior Survey is a different profession that includes visionary development, location planning, site inspections, programming, research, contact with the shareholders of a project, construction management, and execution of the design.</p>
                                        <h4>The interior survey company that focus on strategy</h4>
                                        <p className='mb-0'>LDR Survey Pvt Ltd provides the best interior survey services in Chennai. we have been implementing the best practice of Interior Survey to all the clients across the landscape.</p>
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

export default InteriorSurvey;