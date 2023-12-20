import React from 'react';
import './dashBoard.css';
import { connect } from "react-redux";
import AdminHeader from "../adminNavbar/adminNavbar";
import Users from '../users/users';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
// import { fetchAllUsers } from '../../../redux/actions/actions';


class DashBoard extends React.Component {
    constructor(){
        super();
        this.state = {
        }
    }

    componentDidUpdate(){
    }

    render(){
        return(
            <>
                <AdminHeader />
                <div className="dashBoard">
                    <div className="container-fluid">
                        <div className='row'>
                            <div className='col-12'>
                                <Tab.Container id="left-tabs-example" defaultActiveKey="users">
                                    <Row>   
                                        <Col sm={3}>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                            <Nav.Link eventKey="users">Users</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="products">Products</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        </Col>
                                        <Col sm={9}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="users">
                                                <Users />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="products">Second tab content</Tab.Pane>
                                        </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

function mapStateToProps(state){
    return{
    }
}

const mapDispatchToProps = dispatch => {
    const extraProps = {
    }
    return extraProps;
}

DashBoard = connect(mapStateToProps, mapDispatchToProps)(DashBoard);

export default DashBoard;