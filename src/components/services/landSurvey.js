import React from 'react';
import Header from '../navbar/navbar';
import Footer from '../footer/footer';
import SurveyBanner from './surveyBanner';
import SurveySidebar from './surveySidebar';
import './services.css';

class LandSurvey extends React.Component {

    render(){
        return(
            <>
                <Header />
                    <SurveyBanner description="Land Survey is first step in your Property Regularization. Get a clear picture of the legalized boundary location & Other Details Present In Your Land."/>
                    <div className='surveyLayout'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-8 mb-4 mb-md-0'>
                                    <div className='survey'>
                                        <h3 className='mb-3'>Land Survey</h3>
                                        <p>Land Survey are directed to build up the specific location, limits, or development of a plot of land in any stated area. This kind of survey requires proficient registration in all states. As of now, land surveys, by and large, include the accompanying tasks:</p>
                                        <ul className='ps-0 mb-4'>
                                            <li className='mb-2'>Creating distinct markers or landmarks to define and safeguard property boundaries for private individuals, corporations, or governmental entities.</li>
                                            <li className='mb-2'>Reassessing historical land survey lines to ascertain their precise lengths and orientation, optimizing accuracy due to the value of land.</li>
                                            <li className='mb-2'>Precisely calculating land measurements, distances, and orientations, and crafting a durable land map to visually archive survey data for future reference.</li>
                                            <li>Crafting a technical property description for the blueprint, ensuring comprehensive and accurate documentation.</li>
                                        </ul>
                                        <h4>Why should we choose land survey?</h4>
                                        <p>A land survey helps you in the acquisition of land and development in the correct guidance. It assists you with choosing whether the bought land is positive or negative and if the land is flood inclined. It will like wise assist you with choosing whether the deed visible by the seller follow the right size of the property. “ LDR Survey Pvt Ltd is one of the best land survey agency service providers in Chennai.Contact us today”.</p>
                                        <h4>The land survey company that focus on strategy</h4>
                                        <p className='mb-0'>LDR Survey Pvt Ltd provides the best Land survey services in Chennai. we have been implementing the best practice of Land survey to all the clients across the landscape.</p>
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

export default LandSurvey;