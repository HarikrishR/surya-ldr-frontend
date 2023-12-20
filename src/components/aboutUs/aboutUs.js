import React from 'react';
import './aboutUs.css';
import Header from '../navbar/navbar';
import Banner from '../banner/banner';
import Footer from '../footer/footer'; 
import aboutUsBg from '../../assets/images/aboutUsBg.jpg';
import ceoSignature from '../../assets/images/ceoSignature.webp';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class AboutUs extends React.Component {

    render(){
        return(
            <>
                <Header />
                <Banner title="About Us" backgroundImage={aboutUsBg} />
                <div className="aboutCEO text-center">
                    <div className="container">
                        <h2>CEO Says</h2>
                        <p className="mb-3">Welcome to LDR Survey Pvt Ltd - Your Trusted Land Solutions Partner! Founded by a seasoned team with extensive engineering expertise, including M.R. Dinesh as the CEO, D. Sangeetha as the Chairperson, and R. Gangeyan as the Managing Director. We specialize in providing comprehensive land surveying services to address all your land-related challenges. Whether you require accurate measurements for construction zones, vacant land assessments, contour mapping, or details about the surrounding areas for future developments, LDR Survey Pvt Ltd is your ultimate destination. Our commitment to unwavering honesty ensures that you receive 100% reliable and precise results. Join hands with us to pave the way for your projects' success.</p>
                        <h6 className='mb-3'>DINESH M.R - [CEO]</h6>
                        <img src={ceoSignature} alt='DINESH M.R' />
                    </div>
                </div>
                <div className='abtAccordion position-relative'>
                    <div className='abtAccordionOverlay position-absolute'></div>
                    <div className='container position-relative'>
                        <div className='row'>
                            <div className='col-12'>
                                <Tabs
                                defaultActiveKey="history"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                                >
                                    <Tab eventKey="history" title="History">
                                        <p className='mb-0'>LDR Land Survey Pvt Ltd was established in 2006 in Chennai, India. It has been operating having the status of Land Survey Data handled since 2006. Since that time the organization has extended its operations. Having headquarters in Chennai and has an official Land Survey development team in Chennai. The Company provides services in the fields of Topographical survey, Digital Land Photogrammetry, Boundary survey, ATS Survey, Drain Survey, Site Contour Survey, FMB, LIDAR, Mobile LIDAR, GIS, CAD, PLS CAD, BIM, Satellite survey, Total Station survey, DGPS Survey and UAV (DRONE Survey) etc. We use the latest technology and have qualified, expert, well trained, well behaved staff with a wide range of experience.</p>
                                    </Tab>
                                    <Tab eventKey="focus" title="Focus">
                                        <p className='mb-0'>High Quality (Accuracy), cost effective Land survey is the primary focus of LDR Survey Pvt Ltd. The administration has more than 15 years of experience in Land Survey services. We always assist and provide services to our clients that each project is achieved and executed with focus the standard. The Trust we gain with our clients give us the freedom to work with them, with stagewise improvement, design consultation, operation & execution.</p>
                                    </Tab>
                                    <Tab eventKey="strength" title="Strength">
                                        <p className='mb-1'>Our People are experienced Surveyors, Highly Qualified, trained on latest technologies, we understand What our clients wants and needs.</p>
                                        <ul className='ps-0 mb-0 ul'>
                                            <li className='mb-1 li'>Experienced & Professional.</li>
                                            <li className='mb-1 li'>Honest & Dependable.</li>
                                            <li className='mb-1 li'>Bonded.</li>
                                        </ul>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default AboutUs;