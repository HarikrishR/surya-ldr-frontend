import React from 'react';
import './services.css';

class SurveyBanner extends React.Component {

    render(){
        return(
            <>
                <div className='surveyBanner'>
                    <div className='container text-center'>
                        <p className='mb-0'>{this.props.description}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default SurveyBanner;