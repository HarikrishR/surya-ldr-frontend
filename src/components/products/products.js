import React from 'react';
import './product.css';
import Header from '../navbar/navbar';
import Banner from '../banner/banner';
import Footer from '../footer/footer';
import productBg from '../../assets/images/productBg.jpg';
import { connect } from "react-redux";
// import { userDataRes, isAuthenticatedRes } from '../../redux/actions/actions';

class Products extends React.Component {
    constructor(){
        super();
        this.state = {
        }
    }

    render(){
        return(
            <>
                <Header />
                <Banner title="Products" backgroundImage={productBg} />
                <div className="products text-center">
                    <div className="container">
                        
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

function mapStateToProps(state){
    return{
        isAuthenticated : state.isAuthenticated,
        userData : state.userData,
    }
}

const mapDispatchToProps = dispatch => {
    const extraProps = {

    }
    return extraProps;
}

Products = connect(mapStateToProps, mapDispatchToProps)(Products);

export default Products;