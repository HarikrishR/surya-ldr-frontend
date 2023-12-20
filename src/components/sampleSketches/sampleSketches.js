import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Header from '../navbar/navbar';
import Banner from '../banner/banner';
import Footer from '../footer/footer';
import servicesBg from '../../assets/images/servicesBg.jpg';
import canopies1 from '../../assets/images/sampleSketches/canopies1.webp';
import canopies2 from '../../assets/images/sampleSketches/canopies2.webp';
import canopies3 from '../../assets/images/sampleSketches/canopies3.webp';
import dls1 from '../../assets/images/sampleSketches/dls1.webp';
import dls2 from '../../assets/images/sampleSketches/dls2.webp';
import dls3 from '../../assets/images/sampleSketches/dls3.webp';
import fmb1 from '../../assets/images/sampleSketches/fmb1.webp';
import fmb2 from '../../assets/images/sampleSketches/fmb2.webp';
import fmb3 from '../../assets/images/sampleSketches/fmb3.webp';
import gs1 from '../../assets/images/sampleSketches/gs1.webp';
import gs2 from '../../assets/images/sampleSketches/gs2.webp';
import gs3 from '../../assets/images/sampleSketches/gs3.webp';
import ls1 from '../../assets/images/sampleSketches/ls1.webp';
import ls2 from '../../assets/images/sampleSketches/ls2.webp';
import ls3 from '../../assets/images/sampleSketches/ls3.webp';
import is1 from '../../assets/images/sampleSketches/is1.webp';
import is2 from '../../assets/images/sampleSketches/is2.webp';
import is3 from '../../assets/images/sampleSketches/is3.webp';
import pbs1 from '../../assets/images/sampleSketches/pbs1.webp';
import pbs2 from '../../assets/images/sampleSketches/pbs2.webp';
import pbs3 from '../../assets/images/sampleSketches/pbs3.webp';
import res1 from '../../assets/images/sampleSketches/res1.webp';
import res2 from '../../assets/images/sampleSketches/res2.webp';
import res3 from '../../assets/images/sampleSketches/res3.webp';
import rs1 from '../../assets/images/sampleSketches/rs1.webp';
import rs2 from '../../assets/images/sampleSketches/rs2.webp';
import rs3 from '../../assets/images/sampleSketches/rs3.webp';
import ssd1 from '../../assets/images/sampleSketches/ssd1.webp';
import ssd2 from '../../assets/images/sampleSketches/ssd2.webp';
import ssd3 from '../../assets/images/sampleSketches/ssd3.webp';
import tps1 from '../../assets/images/sampleSketches/tps1.webp';
import tps2 from '../../assets/images/sampleSketches/tps2.webp';
import tps3 from '../../assets/images/sampleSketches/tps3.webp';
import tgs1 from '../../assets/images/sampleSketches/tgs1.webp';
import tgs2 from '../../assets/images/sampleSketches/tgs2.webp';
import tgs3 from '../../assets/images/sampleSketches/tgs3.webp';
import ifs1 from '../../assets/images/sampleSketches/ifs1.webp';
import ifs2 from '../../assets/images/sampleSketches/ifs2.webp';
import ifs3 from '../../assets/images/sampleSketches/ifs3.webp';
import cis1 from '../../assets/images/sampleSketches/cis1.webp';
import cis2 from '../../assets/images/sampleSketches/cis2.webp';
import cis3 from '../../assets/images/sampleSketches/cis3.webp';
import ss1 from '../../assets/images/sampleSketches/ss1.webp';
import ss2 from '../../assets/images/sampleSketches/ss2.webp';
import ss3 from '../../assets/images/sampleSketches/ss3.webp';
import hs1 from '../../assets/images/sampleSketches/hs1.webp';
import hs2 from '../../assets/images/sampleSketches/hs2.webp';
import hs3 from '../../assets/images/sampleSketches/hs3.webp';
import hs4 from '../../assets/images/sampleSketches/hs4.webp';
import hs5 from '../../assets/images/sampleSketches/hs5.webp';
import hs6 from '../../assets/images/sampleSketches/hs6.webp';
import fmbs1 from '../../assets/images/sampleSketches/fmbs1.webp';
import fmbs2 from '../../assets/images/sampleSketches/fmbs2.webp';
import fmbs3 from '../../assets/images/sampleSketches/fmbs3.webp';
import as1 from '../../assets/images/sampleSketches/as1.webp';
import as2 from '../../assets/images/sampleSketches/as2.webp';
import as3 from '../../assets/images/sampleSketches/as3.webp';
import rcs1 from '../../assets/images/sampleSketches/rcs1.webp';
import rcs2 from '../../assets/images/sampleSketches/rcs2.webp';
import rcs3 from '../../assets/images/sampleSketches/rcs3.webp';
import bs1 from '../../assets/images/sampleSketches/bs1.webp';
import bs2 from '../../assets/images/sampleSketches/bs2.webp';
import bs3 from '../../assets/images/sampleSketches/bs3.webp';
import ts1 from '../../assets/images/sampleSketches/ts1.webp';
import ts2 from '../../assets/images/sampleSketches/ts2.webp';
import ts3 from '../../assets/images/sampleSketches/ts3.webp';
import ras1 from '../../assets/images/sampleSketches/ras1.webp';
import ras2 from '../../assets/images/sampleSketches/ras2.webp';
import ras3 from '../../assets/images/sampleSketches/ras3.webp';
import rls1 from '../../assets/images/sampleSketches/rls1.webp';
import rls2 from '../../assets/images/sampleSketches/rls2.webp';
import './sampleSketches.css';

class SampleSketches extends React.Component {

    render(){
        return(
            <>
                <Header />
                <Banner title="Sample Sketches" backgroundImage={servicesBg}/>
                <div className='sampleSketches'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Canopies Surveys With Tree Locations</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={canopies1} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={canopies2} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={canopies3} alt='' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Digital Land Surveys</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={dls1} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={dls2} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={dls3} alt='' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>FMB Combined Sketch</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={fmb1} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={fmb2} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={fmb3} alt='' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Garden Surveys</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={gs1} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={gs2} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={gs3} alt='' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Land Surveys</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={ls1} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={ls2} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={ls3} alt='' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Interior Surveys</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={is1} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={is2} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={is3} alt='' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>Proposed Building Surveys</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={pbs1} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={pbs2} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={pbs3} alt='' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="7">
                                        <Accordion.Header>Real Estate Surveys</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={res1} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={res2} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={res3} alt='' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="8">
                                        <Accordion.Header>Road Surveys</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={rs1} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={rs2} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={rs3} alt='' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="9">
                                        <Accordion.Header>Sample Survey Design</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={ssd1} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={ssd2} alt='' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={ssd3} alt='' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="10">
                                        <Accordion.Header>Topo Plan Surrounding</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={tps1} alt='Topo Plan Surrounding' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={tps2} alt='Topo Plan Surrounding' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={tps3} alt='Topo Plan Surrounding' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="11">
                                        <Accordion.Header>Topographical Surveys</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={tgs1} alt='Topographical Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={tgs2} alt='Topographical Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={tgs3} alt='Topographical Surveys' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="12">
                                        <Accordion.Header>Industrial & Factory Surveys</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={ifs1} alt='Industrial & Factory Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={ifs2} alt='Industrial & Factory Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={ifs3} alt='Industrial & Factory Surveys' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="13">
                                        <Accordion.Header>College & Institute Surveys</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={cis1} alt='College & Institute Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={cis2} alt='College & Institute Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={cis3} alt='College & Institute Surveys' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="14">
                                        <Accordion.Header>School Surveys</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={ss1} alt='School Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={ss2} alt='School Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={ss3} alt='School Surveys' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="15">
                                        <Accordion.Header>Hospital Surveys</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={hs1} alt='Hospital Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={hs2} alt='Hospital Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={hs3} alt='Hospital Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={hs4} alt='Hospital Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={hs5} alt='Hospital Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={hs6} alt='Hospital Surveys' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="16">
                                        <Accordion.Header>FMB Surveys</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={fmbs1} alt='FMB Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={fmbs2} alt='FMB Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={fmbs3} alt='FMB Surveys' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="17">
                                        <Accordion.Header>Apartment Surveys</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={as1} alt='Apartment Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={as2} alt='Apartment Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={as3} alt='Apartment Surveys' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="18">
                                        <Accordion.Header>River & Channel Surveys</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={rcs1} alt='River & Channel Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={rcs2} alt='River & Channel Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={rcs3} alt='River & Channel Surveys' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="19">
                                        <Accordion.Header>Bridge Surveys</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={bs1} alt='Bridge Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={bs2} alt='Bridge Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={bs3} alt='Bridge Surveys' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="20">
                                        <Accordion.Header>Temple Surveys</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={ts1} alt='Temple Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={ts2} alt='Temple Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={ts3} alt='Temple Surveys' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="21">
                                        <Accordion.Header>Railway Station & Airport Surveys</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={ras1} alt='Railway Station & Airport Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={ras2} alt='Railway Station & Airport Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={ras3} alt='Railway Station & Airport Surveys' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="22">
                                        <Accordion.Header>Research And Lab Surveys</Accordion.Header>
                                        <Accordion.Body>
                                            <div className='row align-items-center'>
                                                <div className='col-sm-4'>
                                                    <img src={rls1} alt='Research And Lab Surveys' className='img-fluid' />
                                                </div>
                                                <div className='col-sm-4'>
                                                    <img src={rls2} alt='Research And Lab Surveys' className='img-fluid' />
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default SampleSketches;