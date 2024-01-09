import React from 'react';
import './gallery.css';
import Header from '../navbar/navbar';
import Banner from '../banner/banner';
import Footer from '../footer/footer'; 
import galleryBg from '../../assets/images/galleryBg.png';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import g1 from '../../assets/images/gallery/g1.webp';
import g2 from '../../assets/images/gallery/g2.webp';
import g3 from '../../assets/images/gallery/g3.webp';
import g4 from '../../assets/images/gallery/g4.webp';
import g5 from '../../assets/images/gallery/g5.webp';

class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal : false,
            modalImage : ""
        }
    }

    showModal = (val) => {
        this.setState({
            modalImage: val,
            showModal: true,
        })
    }

    render(){
        return(
            <>
                <Header />
                <Banner title="Gallery" backgroundImage={galleryBg} />
                <div className="gallery text-center">
                    <div className="container">
                        <div className='row'>
                            <div  className='col-md-3'>
                                <Link onClick={()=>{this.showModal(g1)}}>
                                    <img src={g1} alt="Gallery" className="img-fluid" />
                                </Link>
                            </div>
                            <div  className='col-md-3'>
                                <Link onClick={()=>{this.showModal(g2)}}>
                                    <img src={g2} alt="Gallery" className="img-fluid" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.showModal} onHide={() => this.setState({showModal:false})} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton className='border-0 pb-0'>
                        <h3 className='text-center modalHead m-0'>Gallery</h3>
                    </Modal.Header>
                    <Modal.Body className='text-center p-3'>
                        <img src={this.state.modalImage} alt='Gallery' className='img-fluid'/>
                    </Modal.Body>
                </Modal>
                <Footer />
            </>
        )
    }
}

export default Gallery;