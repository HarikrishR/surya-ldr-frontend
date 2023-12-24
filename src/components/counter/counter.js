import React from 'react';
import './counter.css';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import project from '../../assets/images/project.png';
import success from '../../assets/images/success.png';
import like from '../../assets/images/like.png';
import rating from '../../assets/images/rating.png';
 
class Counter extends React.Component {

    render(){
        return(
            <>
                <div className="counter text-center">
                    <div className="container">
                        <div className='row'>
                            <div className='col-sm-6 col-md-3 text-center'>
                                <div className='counterBox'>
                                    <img src={project} alt='Projects' className='img-fluid mb-2'/>
                                    <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                      {({ isVisible }) => (
                                        <div style={{ height: 60 }}>
                                          {isVisible ? <CountUp className='counterNum' end={11349} /> : null}
                                        </div>
                                      )}
                                    </VisibilitySensor>
                                    <h5>Total Projects</h5>
                                </div>
                            </div>
                            <div className='mt-3 mt-sm-0 col-sm-6 col-md-3 text-center'>
                                <div className='counterBox'>
                                    <img src={success} alt='Projects' className='img-fluid mb-2'/>
                                    <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                      {({ isVisible }) => (
                                        <div style={{ height: 60 }}>
                                          {isVisible ? <CountUp className='counterNum' end={11089} /> : null}
                                        </div>
                                      )}
                                    </VisibilitySensor>
                                    <h5>Success</h5>
                                </div>
                            </div>
                            <div className='mt-3 mt-md-0 col-sm-6 col-md-3 text-center'>
                                <div className='counterBox'>
                                    <img src={rating} alt='Projects' className='img-fluid mb-2'/>
                                    <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                      {({ isVisible }) => (
                                        <div style={{ height: 60 }}>
                                          {isVisible ? <CountUp className='counterNum' end={9005} /> : null}
                                        </div>
                                      )}
                                    </VisibilitySensor>
                                    <h5>Customer Satisified</h5>
                                </div>
                            </div>
                            <div className='mt-3 mt-md-0 col-sm-6 col-md-3 text-center'>
                                <div className='counterBox'>
                                    <img src={like} alt='Projects' className='img-fluid mb-2'/>
                                    <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                                      {({ isVisible }) => (
                                        <div style={{ height: 60 }}>
                                          {isVisible ? <CountUp className='counterNum' end={11032} /> : null}
                                        </div>
                                      )}
                                    </VisibilitySensor>
                                    <h5>Likes</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Counter;