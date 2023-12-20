import React from 'react';
import Header from '../navbar/navbar';
import Footer from '../footer/footer';
import SurveyBanner from './surveyBanner';
import SurveySidebar from './surveySidebar';
import './services.css';

class BuildPlanSurvey extends React.Component {

    render(){
        return(
            <>
                <Header />
                    <SurveyBanner description="Our Engineers Who Expertees In The Structural Engineering, Specialized In Consultations Of Structures And Structural Analysis Of Proposed Building Plans."/>
                    <div className='surveyLayout'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-8 mb-4 mb-md-0'>
                                    <div className='survey'>
                                        <h3 className='mb-3'>Proposed Building Plans</h3>
                                        <p>How so ever challenging or Difficult building plans are, we say with pride that we will be the best in executing (Marking) the same at the site.</p>
                                        <p>We have gained rich management experience in the field of providing Best Building Planner Services in Chennai. Our services are generally accepted in financial as well as in residential sectors and highly acknowledge for their planning layout and timely execution. Our services are well known for their honesty and efficient work performance. We provide our services at the most reasonable rates.</p>
                                        <ul className='ps-0 mb-4'>
                                            <li className='mb-2'>Timely Execution.</li>
                                            <li className='mb-2'>Efficient Execution Team.</li>
                                            <li>Applied Latest Methodology.</li>
                                        </ul>
                                        <h4>How to select an ideal proposed building plan/house/home</h4>
                                        <ul className='ps-0 mb-4'>
                                            <li className='mb-2'>Sketch Out Your Fantasy Inclinations - What Have You Generally Needed In A Home?</li>
                                            <li className='mb-2'>Must-Have Highlights - List The Provisions That Are Totally Needed In The House.</li>
                                            <li className='mb-2'>Research And Pick A Building Style - What Do You Need Your Home To Closely Feature?</li>
                                            <li className='mb-2'>Budget - Plan Out A Budget You Can Allow.</li>
                                            <li className='mb-2'>Peruse Every One Of The Potential Outcomes-Use A House Plan Search Instrument To Bore Down And Track Down Your Ideal Floor Plan.</li>
                                            <li>Decide Functional Ambition Like Size - How Enormous Does Your Home Should Be?</li>
                                        </ul>
                                        <h4>Proposed building plans</h4>
                                        <p className='mb-0'>In case you are simply beginning the most common way of picking a story plan, you probably won't be certain where to begin. The previously mentioned factors are vital in narrowing down your choices and settling on a choice. Beneath we will separate every one of these focuses to assist you with acquiring clearness on picking the home plan that is appropriate for you. LDR Survey Pvt Ltd is the topmost Proposed building plans, home plans, House plans company in Chennai Contact us today Get solutions to your problems”.</p>
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

export default BuildPlanSurvey;