import React from 'react';
import './serviceCarousel.css';
import { Link } from "react-router-dom";
import landSurvey from '../../assets/images/services/landsurvey.webp';
import topoGraphical from '../../assets/images/services/topographical.webp';
import propertySurvey from '../../assets/images/services/propertySurvey.webp';
import reSurvey from '../../assets/images/services/reSurvey.webp';
import bpSurvey from '../../assets/images/services/bpSurvey.webp';
import dSurvey from '../../assets/images/services/dSurvey.webp';
import idSurvey from '../../assets/images/services/idSurvey.jpg';
import loSurvey from '../../assets/images/services/loSurvey.jpeg';
import Carousel from 'react-multi-carousel';
import fmb from '../../assets/images/services/fmb.png'
import 'react-multi-carousel/lib/styles.css';

class ServiceCarousel extends React.Component {
    constructor(){
        super();
        this.state = {
        }
    }

    render(){
        return(
            <>
                <Carousel
                  additionalTransfrom={0}
                  arrows
                  autoPlaySpeed={3000}
                  centerMode={false}
                  className="serviceContainer"
                  containerClass=""
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite={false}
                  itemClass=""
                  keyBoardControl
                  minimumTouchDrag={80}
                  pauseOnHover
                  renderArrowsWhenDisabled={false}
                  renderButtonGroupOutside={true}
                  renderDotsOutside={false}
                  responsive={{
                    superLargeDesktop: {
                      // the naming can be any, depends on you.
                      breakpoint: { max: 4000, min: 1299 },
                      items: 4,
                      partialVisibilityGutter: 40
                    },
                    desktop: {
                        breakpoint: {
                            max: 1299,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                      breakpoint: {
                        max: 500,
                        min: 0
                      },
                      items: 1,
                      partialVisibilityGutter: 30
                    },
                    tablet: {
                      breakpoint: {
                        max: 1024,
                        min: 501
                      },
                      items: 2,
                      partialVisibilityGutter: 30
                    }
                  }}
                  rewind={false}
                  rewindWithAnimation={false}
                  rtl={false}
                  shouldResetAutoplay
                  showDots={false}  
                  sliderClass=""
                  slidesToSlide={1}
                  swipeable
                >
                    <div className='serviceItems position-relative'>
                        <Link title='Land Survey' to="/land-survey">
                            <img src={landSurvey} alt="Land Survey" className="img" />
                            <div className='position-absolute'>
                                <h3 className='mb-2'>Land Survey</h3>
                                <a>Explore</a>
                            </div>
                        </Link>
                    </div>
                    <div className='serviceItems position-relative'>
                        <Link title='Land Survey' to="/topographical-survey">
                        <img src={topoGraphical} alt="Topographical Survey" className="img" />
                            <div className='position-absolute'>
                                <h3 className='mb-2'>Topographical Survey</h3>
                                <a>Explore</a>
                            </div>
                        </Link>
                    </div>
                    <div className='serviceItems position-relative'>
                        <Link title='Property Survey' to="/property-survey">
                        <img src={propertySurvey} alt="Property Survey" className="img" />
                            <div className='position-absolute'>
                                <h3 className='mb-2'>Property Survey</h3>
                                <a>Explore</a>
                            </div>
                        </Link>
                    </div>
                    <div className='serviceItems position-relative'>
                        <Link title='Layout Survey' to="/layout-survey">
                        <img src={loSurvey} alt="Layout Survey" className="img" />
                            <div className='position-absolute'>
                                <h3 className='mb-2'>Layout Survey</h3>
                                <a>Explore</a>
                            </div>
                        </Link>
                    </div>
                    <div className='serviceItems position-relative'>
                    <img src={bpSurvey} alt="Building Plan Survey" className="img" />
                        <Link title='Building Plan Survey' to="/build-plan">
                            <div className='position-absolute'>
                                <h3 className='mb-2'>Building Plan Survey</h3>
                                <a>Explore</a>
                            </div>
                        </Link>
                    </div>
                    <div className='serviceItems position-relative'>
                    <img src={idSurvey} alt="Interior Survey" className="img" />
                        <Link title='Interior Survey' to="/interior-survey">
                            <div className='position-absolute'>
                                <h3 className='mb-2'>Interior Survey</h3>
                                <a>Explore</a>
                            </div>
                        </Link>
                    </div>
                    <div className='serviceItems position-relative'>
                    <img src={reSurvey} alt="Real Estate Survey" className="img" />
                        <Link title='Real Estate Survey' to="/real-estate">
                            <div className='position-absolute'>
                                <h3 className='mb-2'>Real Estate Survey</h3>
                                <a>Explore</a>
                            </div>
                        </Link>
                    </div>
                    <div className='serviceItems position-relative'>
                    <img src={dSurvey} alt="Digital Survey" className="img" />
                        <Link title='Digital Survey' to="/digital-survey">
                            <div className='position-absolute'>
                                <h3 className='mb-2'>Digital Survey</h3>
                                <a>Explore</a>
                            </div>
                        </Link>
                    </div>
                    <div className='serviceItems position-relative'>
                    <img src={fmb} alt="Combined FMB Sketches" className="img" />
                        <Link title='Combined FMB Sketches' to="/fmb-sketches">
                            <div className='position-absolute'>
                                <h3 className='mb-2'>Combined FMB Sketches</h3>
                                <a>Explore</a>
                            </div>
                        </Link>
                    </div>
                </Carousel>
            </>
        )
    }
}

export default ServiceCarousel;