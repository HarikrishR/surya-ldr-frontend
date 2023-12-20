import React from 'react';
import { Link } from "react-router-dom";
import './services.css';

class SurveySidebar extends React.Component {

    render(){
        return(
            <>
                <div className='surveySidebar shadow'>
                    <h4 className='mb-3'>Services</h4>
                    <ul className='ps-0 mb-0'>
                        <li><Link title='Land Survey' to="/land-survey">Land Survey</Link></li>
                        <hr className='my-2'/>
                        <li><Link title='Topographical Survey' to="/topographical-survey">Topographical Survey</Link></li>
                        <hr className='my-2'/>
                        <li><Link title='Property Survey' to="/property-survey">Property Survey</Link></li>
                        <hr className='my-2'/>
                        <li><Link title='Layout Survey' to="/layout-survey">Layout Survey</Link></li>
                        <hr className='my-2'/>
                        <li><Link title='Proposed Building Plan Survey' to="/build-plan">Proposed Building Plan Survey</Link></li>
                        <hr className='my-2'/>
                        <li><Link title='Interior Survey' to="/interior-survey">Interior Survey</Link></li>
                        <hr className='my-2'/>
                        <li><Link title='Real Estate Survey' to="/real-estate">Real Estate Survey</Link></li>
                        <hr className='my-2'/>
                        <li><Link title='Digital Survey' to="/digital-survey">Digital Survey</Link></li>
                        <hr className='my-2'/>
                        <li><Link title='Combined FMB Sketches' to="/fmb-sketches">Combined FMB Sketches</Link></li>
                    </ul>
                </div>
            </>
        )
    }
}

export default SurveySidebar;