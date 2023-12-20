import React from 'react';
import './banner.css';

class Banner extends React.Component {

    render(){
        return(
            <div className='titleBanner position-relative' style={{backgroundImage: "url("+this.props.backgroundImage+")"}}>
                <div className='container'>
                    <h1 className='mb-0'>{this.props.title}</h1>
                </div>
            </div>
        )
    }
}

export default Banner;