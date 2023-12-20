import React from 'react';
import Header from '../navbar/navbar';
import Footer from '../footer/footer';
import reSurveyFg from '../../assets/images/services/reSurveyFg.webp'
import SurveyBanner from './surveyBanner';

import './services.css';

class RealEstateSurvey extends React.Component {

    render(){
        return(
            <>
                <Header />
                    <SurveyBanner description="Anything dealing with land property matters, we ensure that every rupee of your hard earn money is spent worthy. You will be paying for what you buy with the help of our digitalized real estate investor plan."/>
                    <div className='survey'>
                        <div className='container'>
                            <div className='row align-items-center'>
                                <div className='col-lg-6 mb-4 mb-lg-0'>
                                    <h3 className='mb-3'>Real Estate</h3>
                                    <p>LDR Survey Pvt Ltd real estate advisors provide 360-degree portfolio management services in the real estate domain. We concentrate on the real estate market and provide honest research-based advice.</p>
                                    <p>LDR Survey Pvt Ltd is a Best Real Estate Agents and Advisors are proud to announce that we do not have tie-ups or marketing arrangements with any asset management companies to promote their real estate products or services. We are independent and provide honest advice to our clients backed by strong research.</p>
                                    <p className='mb-0'>LDR Survey Pvt Ltd provide the Best real estate company services in Chennai make a massive show of their services by partnering with asset management companies, agents, or distributors. Their main goal and focus are to promote their management and building a position in the market. We wish to stay independent and provide honest advice to our clients.</p>
                                </div>
                                <div className='col-lg-6'>
                                    <img src={reSurveyFg} alt='Land Survey' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='surveyPoint position-relative'>
                        <div className='surveyPointOverlay position-absolute'></div>
                        <div className='container position-relative'>
                            <h3>Why does LDR survey pvt ltd have the best recomendations?</h3>
                            <p className='mb-0'>LDR Survey Pvt Ltd provides the best interior survey services in Chennai. we have been implementing the best practice of Interior Survey to all the clients across the landscape.</p>
                        </div>
                    </div>
                <Footer />
            </>
        )
    }
}

export default RealEstateSurvey;