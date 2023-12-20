import React from 'react';
import './pageNotFound.css';
import Header from '../navbar/navbar';
import Footer from '../footer/footer';
import { Link } from "react-router-dom";

class PageNotFound extends React.Component {

    render(){
        return(
            <>
                <Header />
                <div className="pageNotFound text-center">
                    <div className="container">
                        <h3>404</h3>
                        <p className="mb-3">OOPS! Page Not Found</p>
                        <Link title='LDR Survey' to="/" className='btn'>Go To Home Page</Link>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default PageNotFound;