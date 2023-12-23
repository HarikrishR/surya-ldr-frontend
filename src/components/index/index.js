import React from "react";
import Header from "../navbar/navbar";
import Footer from "../footer/footer";
import Clients from "../clients/clients";
import needOne from "../../assets/images/needs01.png";
import needTwo from "../../assets/images/needs02.png";
import needThree from "../../assets/images/needs03.png";
import needFour from "../../assets/images/needs04.png";
import './index.css'

class Index extends React.Component {

  render() {
    return (
        <>
            <Header />
            <div className="banner position-relative">
                <div className="bannerOverlay position-absolute"></div>
                <div className="bannerDes">
                    <h1>LDR Survey Pvt Ltd</h1>
                    <p>LDR is one of the Best Land Survey companies in Chennai. It is the Top Land Survey Consultancy and Educational Trainer.</p>
                </div>
            </div>
            <div className="container">
                <div className="indexAbt text-center">
                    <h2>LaDdeR Survey Pvt Ltd</h2>
                    <p className="mb-0">LDR is one of the Best Land Survey companies in Chennai. It is the Top Land Survey Consultancy and Educational Trainer. We offer Land Survey Services, Boundary Survey Services, Topographical Survey Services, Interior Survey Services, Layout Survey Services, Building and Industrial Survey Services, Road Marking Survey Services, Combined FMB Sketch Services, Property Survey Services, Levelling Contour Services, and Proposed Building Planner Services. We have been working as land surveyors for 15 years. Ladder Survey Institute of Technology (LSIT) makes it possible for clients to find your drawing through a Google search. We give you a strong digital land survey strategy that makes it easy for clients to get in touch with you.</p>
                </div>
            </div>
            <div className="whyChoose position-relative text-center">
                <div className="whyChooseOverlay position-absolute"></div>
                <div className="container position-relative">
                    <h2>Why Choose LDR ?</h2>
                    <p className="mb-4">When seeing our surveyed drawings, you will feel as if you are on the spot. We focus about the accuracy of field-collected data.</p>
                    <div className="row">
                        <div className="offset-md-2 col-md-4">
                            <ul className="p-0 mb-0">
                                <li>Site Photo's</li>
                                <li>Site Location in barcode</li>
                                <li>Google earth top view pics</li>
                                <li>ISO Certified company</li>
                                <li>DGPS Coord</li>
                                <li>File are secure up to 10 years</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul className="p-0 mb-0">
                                <li>Road measurement</li>
                                <li>Surrounding details</li>
                                <li>Survey Numbers</li>
                                <li>Building projections limits</li>
                                <li>Vacant Land & Developed area's percentage</li>
                                <li>Available at 24X7</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Clients />
            <div className="needs text-center position-relative">
                <div className="needsOverlay position-absolute"></div>
                <div className="container position-relative">
                    <div className="needsTop">
                        <h2>Need for LDR</h2>
                        <p className="mb-5 m-auto">These experts use advanced tools to measure and map out the land, ensuring accurate property boundaries and identifying any potential challenges like uneven terrain or hidden obstacles. By doing this, they help prevent future disputes, ensure safe construction, and even save costs by avoiding unexpected issues down the line.</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-3 mb-4 mb-md-0">
                            <div className="needsBox shadow">
                                <img src={needOne} alt="Property Boundary Clarity" className="mb-3" />
                                <h3>Property Boundary Clarity</h3>
                                <p className="mb-0">Land surveys ensure you know exactly where your property boundaries lie, avoiding disputes with neighbors.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mb-4 mb-md-0">
                            <div className="needsBox shadow">
                                <img src={needTwo} alt="Legal Compliance" className="mb-3" />
                                <h3>Legal Compliance</h3>
                                <p className="mb-0">Many local laws require accurate surveys before land transactions or construction projects, keeping you compliant.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mb-4 mb-md-0">
                            <div className="needsBox shadow">
                                <img src={needThree} alt="Property Value" className="mb-3" />
                                <h3>Property Value</h3>
                                <p className="mb-0">A proper survey can enhance property value by showcasing its accurate dimensions and potential for development.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="needsBox shadow">
                                <img src={needFour} alt="Risk Prevention" className="mb-3" />
                                <h3>Risk Prevention</h3>
                                <p className="mb-0">Surveys identify potential hazards or limitations on the land, helping you make informed decisions about land use.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
  }
}

export default Index;
