import React from 'react';
import Header from '../navbar/navbar';
import Footer from '../footer/footer';
import SurveySidebar from './surveySidebar';
import SurveyBanner from './surveyBanner';

import './services.css';

class PropertySurvey extends React.Component {

    render(){
        return(
            <>
                <Header />
                    <SurveyBanner description="A property survey is required to ensure that the property we are going to buy is worth the amount we spend. We Enlist On The Field And Provide A Detailed Map Of The Property’s Legal Boundary And The Location Of Nearby Buildings As Per The Documents."/>
                    <div className='surveyLayout'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-8 mb-4 mb-md-0'>
                                    <div className='survey'>
                                        <h3 className='mb-3'>Property Survey</h3>
                                        <p>Property Survey are directed to build up the specific location, limits, or development of a plot of land in any stated area. This kind of survey requires proficient registration in all states. As of now, land surveys, by and large, include the accompanying tasks:</p>
                                        <ul className='ps-0 mb-4'>
                                            <li className='mb-2'>Establishing markers or landmarks to characterize and along these lines protect the limits of land having a place with a private concern, a corporation, or the government.</li>
                                            <li className='mb-2'>Rerunning old land survey lines to decide their lengths and aspect. Because of the significant expense of land, old lines are remeasured to get more exact estimations.</li>
                                            <li className='mb-2'>Calculating areas, distances, and headings and setting up the land guide to representing the survey information with the goal that it very well may be utilized as a lasting record</li>
                                            <li>Writing a specialized description for the plan.</li>
                                        </ul>
                                        <h4>Why should we choose property survey?</h4>
                                        <p>A Property survey helps you in the acquisition of land and development in the correct guidance. It assists you with choosing whether the bought land is positive or negative and if the land is flood inclined. It will likewise assist you with choosing whether the deed visible by the seller follow the right size of the property. “LDR Survey Pvt Ltd is one of the best land survey agency service providers in Chennai. Contact us today”.</p>
                                        <h4>The property survey company that focus on strategy</h4>
                                        <p className='mb-0'>LDR Survey Pvt Ltd provides the best Property survey services in Chennai. we have been implementing the best practice of Property survey to all the clients across the landscape.</p>
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

export default PropertySurvey;