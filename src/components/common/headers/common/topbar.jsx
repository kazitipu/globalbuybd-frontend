import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {auth} from '../../../../firebase/firebase.utils'
import './topbar.css'
import {setCurrentUser} from '../../../../actions'

class TopBar extends Component {

    onSignOutClick =async ()=>{
        await auth.signOut()
        this.props.setCurrentUser({displayName:'', email:'', password:''})
    }

    render() {
        const {currentUser} = this.props
        return (
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header-contact">
                                <ul>
                                    <li>welcome to our store GlobalBuyBd</li>
                                    <li><i className="fa fa-phone" aria-hidden="true"></i>call_us:  +88-01521-503360</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 text-right">
                            <ul className="header-dropdown">
                                <li className="mobile-wishlist compare-mobile"><Link to={`${process.env.PUBLIC_URL}/compare`}><i className="fa fa-random" aria-hidden="true"></i>compare</Link></li>
                                <li className="mobile-wishlist"><Link to={`${process.env.PUBLIC_URL}/wishlist`}><i className="fa fa-heart" aria-hidden="true"></i>wishlist</Link></li>

                                {
                                currentUser.displayName? ( <li className="onhover-dropdown mobile-account">
                                    
                                <i className="fa fa-user" aria-hidden="true"></i>{currentUser.displayName.slice(0,10)}
                                <ul className="onhover-show-div">
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/pages/dashboard`} data-lng="en">Dashboard</Link>
                                    </li>
                                    <li>
                                        <div className='sign-out-button' onClick={this.onSignOutClick} data-lng="en">sign out</div>
                                    </li>
                                </ul>
                            </li>):
                                ( <li className="onhover-dropdown mobile-account">
                                    
                                <i className="fa fa-user" aria-hidden="true"></i> my_account
                                <ul className="onhover-show-div">
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/pages/login`} data-lng="en">Login</Link>
                                    </li>
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/pages/register`} data-lng="en">Register</Link>
                                    </li>
                                </ul>
                            </li>)
    }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,

})

export default connect(mapStateToProps,{setCurrentUser})(TopBar);