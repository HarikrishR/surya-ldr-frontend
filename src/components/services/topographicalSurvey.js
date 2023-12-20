import React from 'react';
import Header from '../navbar/navbar';
import Footer from '../footer/footer';
import SurveyBanner from './surveyBanner';
import SurveySidebar from './surveySidebar';
import './services.css';

class TopoGraphicalSurvey extends React.Component {

    render(){
        return(
            <>
                <Header />
                    <SurveyBanner description="The topographical survey not only depicts all the natural details present in your field, but also gives a holistic representation of all the constructed manmade features and undulations present in the field."/>
                    <div className='surveyLayout'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-8 mb-4 mb-md-0'>
                                    <div className='survey'>
                                        <h3 className='mb-3'>Topographical Survey</h3>
                                        <p>A Topographical survey includes deciding the level and vertical areas of articles on the outside of the earth. The Level area involves finding 'objects' like roads, railways, ponds, houses, boundaries of properties, and so forth by estimating flat distances; the articles are shown by images. The Vertical area incorporates the area of hills, valleys, depressions, benchmarks, RL's of focuses, and so forth by estimating vertical distances; the items, for this situation, are forward in mitigation:</p>
                                        <ul className='ps-0 mb-4'>
                                            <li className='mb-2'>Hence, a topographical map shows the idea of the earth surface alongside the places of various items.</li>
                                            <li className='mb-2'>Such a map is fundamental for designing ventures including roads, railways, water system, supplies, municipalities and so forth.</li>
                                            <li className='mb-2'>The size of a topographical map relies upon the degree of the area it covers, and the reason for which it is to be ready.</li>
                                            <li>For the most part, a topographical map is set up as indicated by a size of 1 cm to 1 km (i.e., 1/100,000).</li>
                                        </ul>
                                        <h4>Why should we choose topographical survey?</h4>
                                        <p>To find out the structure, level, shape, and geographic position both natural and unnatural land highlights, topography surveys are essential regardless of whether it is a little garden, a roadway, an estate, or even a public park. The topographical surveys can likely be the most standard application in fostering the limits of land or property The topographic survey helps to get an accurate report for our property and save our money. “LDR Survey Pvt Ltd is one of the best topographical survey company service providers in Chennai. Contact us today”.</p>
                                        <h4>The topographical survey company that focus on strategy</h4>
                                        <p className='mb-0'>LDR Survey Pvt Ltd company provides the Best Topographical survey services in Chennai. we have been implementing the best practice of Topographical survey to all the clients across the landscape.</p>
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

export default TopoGraphicalSurvey;