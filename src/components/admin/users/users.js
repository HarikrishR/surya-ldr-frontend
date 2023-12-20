import React from 'react';
import './users.css';
import Table from 'react-bootstrap/Table';
import { connect } from "react-redux";
import { fetchAllUsers } from '../../../redux/actions/actions';


class Users extends React.Component {
    constructor(){
        super();
        this.state = {
        }
    }

    componentDidMount(){
        this.props.fetchAllUsers();
    }

    componentDidUpdate(){
        console.log(this.props.allUser);
        if(this.props.allUser) { 
            // this.setState({
            //     userDataStatus: this.props.allUser.status,
            //     userData: this.props.allUser.message,
            // })
        }
    }

    render(){
        return(
            <>
                <div className="users">
                    <button className='btn-refresh' onClick={()=>this.props.fetchAllUsers()}>Refresh</button>
                    <Table bordered hover size="sm" className='mt-4'>
                        <thead className='text-center'>
                            <tr>
                                <th>User Name</th>
                                <th>Email Address</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.allUser.status === 200 ?
                                this.props.allUser.message.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.userName}</td>
                                            <td>{item.emailAddress}</td>
                                            <td>{item.phoneNumber}</td>
                                        </tr>
                                    )
                                })
                                :
                                <tr className='text-center'>
                                    <td  colSpan={3}>{this.props.allUser.message}</td>
                                </tr>
                            }
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }
}

function mapStateToProps(state){
    return{
        allUser : state.allUserData,
    }
}

const mapDispatchToProps = dispatch => {
    const extraProps = {
        fetchAllUsers: ()=>{
            dispatch(fetchAllUsers())
        },
    }
    return extraProps;
}

Users = connect(mapStateToProps, mapDispatchToProps)(Users);

export default Users;