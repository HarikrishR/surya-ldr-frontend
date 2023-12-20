import React from 'react';
import Header from '../navbar/navbar';
import Footer from '../footer/footer';
import SurveyBanner from './surveyBanner';
import SurveySidebar from './surveySidebar';
import './services.css';

class FMBSketches extends React.Component {

    render(){
        return(
            <>
                <Header />
                    <SurveyBanner description="Combined FMB Is The Process Of Arriving At A Field Drawing With The Help Of Combining Different FMD's Together."/>
                    <div className='surveyLayout'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-8 mb-4 mb-md-0'>
                                    <div className='survey'>
                                        <h3 className='mb-3'>Combined FMB Sketches</h3>
                                        <p>Field Measurement Book (FMB) sketch is a collection of map data that is gathered in volumes by the Government at the respective (VAO) Village Administrative Office or Revenue Department… Specific survey number is divided into various section. Specific department number is held by a property owner. FMB denotes the precise dimensions of the land. Hence, in a property purchase transaction, FMB sketch is used to verify the land measurements and boundaries of the property.</p>
                                        <p className='mb-4'>Example, If You Are Buying a Land Measuring 5 Acres in Which Every Acre of Land Is Owned by Different Persons and If You Want to Make It Is to A Single Drawing Since You Are a Single Owner of the 5 Acres, You Combine All the 5 Different Drawings in One Drawing This Is Called Combined Sketch This May Extend Up To Combining Many Villages.</p>
                                        <h4>Benefits of FMB Sketches:</h4>
                                        <ul className='ps-0 mb-4'>
                                            <li className='mb-2'>FMB Sketch will help to buy or sell your land as per Documents.</li>
                                            <li className='mb-2'>We can identify the subdivision of your land and its area with the help of FMB.</li>
                                            <li className='mb-2'>To Calibrate the exact measurement of your boundary points for ease in marking.</li>
                                            <li>FMB helps in legal verification of the asset when your land has been encroached without your foresight.</li>
                                        </ul>
                                        <h4>The combined FMB sketches company that focus on strategy</h4>
                                        <p className='mb-0'>LDR Survey Pvt Ltd provides the best Combined FMB Sketch services in Chennai. we have been implementing the best practice of Combined FMB Sketch to all the clients across the landscape.</p>
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

export default FMBSketches;