import React from 'react';
import Header from '../navbar/navbar';
import Footer from '../footer/footer';
import SurveyBanner from './surveyBanner';
import SurveySidebar from './surveySidebar';
import './services.css';

class LayoutSurvey extends React.Component {

    render(){
        return(
            <>
                <Header />
                    <SurveyBanner description="Layout Survey Designing and Marking (Executing) Is A Process By Which We Make Sure That Every Piece Of Land Is Utilised And Not Wasted. We also design it to comply with all government norms for approval if needed, and we also implement Vasthu in design."/>
                    <div className='surveyLayout'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-8 mb-4 mb-md-0'>
                                    <div className='survey'>
                                        <h3 className='mb-3'>Layout Survey</h3>
                                        <p className='mb-4'>Site Layout Survey, also referred to as Layout Survey, is a crucial step in accurately depicting the construction project's design and marking the precise locations for elements such as roads and buildings.</p>
                                        <h4>Why You Choose Layout Survey At LDR ?</h4>
                                        <p className='mb-4'>LDR Survey Pvt Ltd is outstanding among other layout survey company services in Chennai, with most efficient and eminent aspect. We deliver our quality report with prompt and convenient timing.</p>
                                        <h4>Advantage Of Layout Survey:</h4>
                                        <ul className='ps-0 mb-4'>
                                            <li className='mb-2'>It helps to find the perfect and exact area of the property.</li>
                                            <li className='mb-2'>It helps to analyze the land measurements legally before we venture into it.</li>
                                            <li>It helps you to understand the type and location of land, avoiding future consequences.</li>
                                        </ul>
                                        <h4>The layout survey company that focus on strategy</h4>
                                        <p className='mb-0'>LDR Survey Pvt Ltd provides the best Layout survey services in Chennai. we have been implementing the best practice of Layout survey to all the clients across the landscape.</p>
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

export default LayoutSurvey;