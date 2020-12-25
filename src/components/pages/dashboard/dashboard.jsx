import React, {Component} from 'react';
import Breadcrumb from "../../common/breadcrumb";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { auth } from '../../../firebase/firebase.utils';
import './dashboard.css'

class Dashboard extends Component {

    constructor (props) {
        super (props)
        this.state={
            adminNav:false,
            style:{left:'-350px'}
        }
    }
    handleLogOutClick =() =>{
        auth.signOut()
        this.props.history.push('/')
    }
    
    closeAdminNav =()=>{
        this.setState({adminNav:false, style:{left:'-350px'}})
    }

    openAdminNav =()=>{
        this.setState({adminNav:true, style:{left:'-10px'}})
    }

    render (){
        const {currentUser} = this.props
        console.log(currentUser)
        return (
            <div>
                <Breadcrumb title={'Dashboard'}/>
                
                
                {/*Dashboard section*/}
                <section className="section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="account-sidebar">
                                    <a className="popup-btn" onClick={this.openAdminNav}>
                                        my account
                                    </a>
                                </div>
                                <div className="dashboard-left" style={this.state.style}>
                                    <div className="collection-mobile-back">
                                    <span className="filter-back" onClick={this.closeAdminNav}>
                                        <i className="fa fa-angle-left" aria-hidden="true"></i> back
                                    </span>
                                    </div>
                                    <div className="block-content">
                                        <ul>
                                            <li className='active' onClick={this.closeAdminNav}><Link to="/pages/dashboard">Account Info</Link></li>
                                            <li style={{'color':'orange'}} onClick={this.closeAdminNav}><Link style={{'color':'orange'}} to="/pages/dashboard/my-orders">My Orders</Link></li>
                                            <li style={{'color':'orange'}} onClick={this.closeAdminNav}><Link style={{'color':'orange'}} to="/pages/dashboard/my-cart">My Cart</Link></li>
                                            <li style={{'color':'orange'}} onClick={this.closeAdminNav}><Link style={{'color':'orange'}} to="/pages/dashboard/my-wishlist">My Wishlist</Link></li>
                                            <li style={{'color':'orange'}} onClick={this.closeAdminNav}><Link style={{'color':'orange'}} to="/pages/dashboard/my-payments">My Payments</Link></li>
                                            {/* <li><a href="#">Newsletter</a></li>
                                            <li><a href="#">My Account</a></li>
                                            <li><a href="#">Change Password</a></li> */}
                                            <li className="last" style={{'color':'orange'}} onClick={this.closeAdminNav}><div style={{'color':'orange'}} style={{'cursor':'pointer'}} onClick={this.handleLogOutClick}>Log Out</div></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="dashboard-right">
                                    <div className="dashboard">
                                        <div className="page-title">
                                            <h2>My Dashboard</h2>
                                        </div>
                                        <div className="welcome-msg">
                                             <p>hello, {currentUser.displayName}</p>
                                            <p>From your My Account Dashboard you have the ability to view a snapshot of
                                                your recent account activity and track your orders information.</p>
                                        </div>
                                        <div className="box-account box-info">
                                            <div className="box-head">
                                                <h2>Account Information</h2>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="box">
                                                        <div className="box-title">
                                                            <h3>Contact Information</h3>
                                                            {/* <a href="#">Edit</a> */}
                                                        </div>
                                                        <div className="box-content">
                                                            <h6>{currentUser.displayName}</h6>
                                                            <h6>{currentUser.email}</h6>
                                                            {/* <h6><a href="#">Change Password</a></h6> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="box">
                                                        <div className="box-title">
                                                            <h3>Newsletters</h3>
                                                            {/* <a href="#">Edit</a> */}
                                                        </div>
                                                        <div className="box-content">
                                                            <p>
                                                                You are currently not subscribed to any newsletter.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="box">
                                                    <div className="box-title">
                                                        <h3>Address Book</h3>
                                                        {/* <a href="#">Manage Addresses</a> */}
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <h6>Default Billing Address</h6>
                                                            <address>
                                                                You have not set a default billing address.<br/>
                                                                {/* <a href="#">Edit Address</a> */}
                                                            </address>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <h6>Default Shipping Address</h6>
                                                            <address>
                                                                You have not set a default shipping address.<br />
                                                                {/* <a href="#">Edit Address</a> */}
                                                            </address>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps, null)(Dashboard)