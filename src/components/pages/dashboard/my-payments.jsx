import React, {Component} from 'react';
import Breadcrumb from "../../common/breadcrumb";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { addToCartAndRemoveWishlistFirestore, removeFromWishlistFirestore,auth } from '../../../firebase/firebase.utils';
import { addToCartAndRemoveWishlist, removeFromWishlist } from '../../../actions';
import payment from './payment';

class MyPayments extends Component {

    constructor (props) {
        super (props)
    }
    handleLogOutClick =() =>{
        auth.signOut()
        this.props.history.push('/')
    }
    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }

    removeFromReduxAndFirestoreWishlist =(item)=>{
        auth.onAuthStateChanged(async userAuth =>await removeFromWishlistFirestore(userAuth,item))
        this.props.removeFromWishlist(item)
    }

    addToCartAndRemoveWishlistFromReduxAndFirestore =(item,qty)=>{
        auth.onAuthStateChanged(async userAuth=>addToCartAndRemoveWishlistFirestore(userAuth,item,qty))
        this.props.addToCartAndRemoveWishlist(item,qty)
    }
    toDateTime=(secs)=> {
        var t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        return t;
    }

    render (){
        const {paymentsArray, symbol} = this.props;
       


        return (
            <div>
                <Breadcrumb title={'Dashboard/My wishlist'}/>
                
                
                {/*Dashboard section*/}
                <section className="section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="account-sidebar">
                                    <a className="popup-btn">
                                        my account
                                    </a>
                                </div>
                                <div className="dashboard-left">
                                    <div className="collection-mobile-back">
                                    <span className="filter-back">
                                        <i className="fa fa-angle-left" aria-hidden="true"></i> back
                                    </span>
                                    </div>
                                    <div className="block-content">
                                        <ul>
                                            <li  style={{'color':'orange'}}><Link  style={{'color':'orange'}} to="/pages/dashboard">Account Info</Link></li>
                                            <li style={{'color':'orange'}}><Link  style={{'color':'orange'}} to="/pages/dashboard/my-orders">My Orders</Link></li>
                                            <li style={{'color':'orange'}}><Link  style={{'color':'orange'}} to="/pages/dashboard/my-cart">My Cart</Link></li>
                                            <li style={{'color':'orange'}}><Link style={{'color':'orange'}} to="/pages/dashboard/my-wishlist">My Wishlist</Link></li>
                                            <li className='active' style={{'color':'orange'}}><Link to="/pages/dashboard/my-payments">My Payments</Link></li>
                                            {/* <li><a href="#">Newsletter</a></li>
                                            <li><a href="#">My Account</a></li>
                                            <li><a href="#">Change Password</a></li> */}
                                            <li className="last"  style={{'color':'orange'}}><div  style={{'color':'orange'}} style={{'cursor':'pointer'}} onClick={this.handleLogOutClick}>Log Out</div></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="dashboard-right">
                                    <div className="dashboard">
                                    {paymentsArray ?
                <section className="wishlist-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <table className="table cart-table table-responsive-xs">
                                    <thead>
                                    <tr className="table-head">
                                        <th scope="col">image</th>
                                        <th scope="col">Order Id</th>
                                        <th scope="col">Payment Id</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Paid At</th>
                                    </tr>
                                    </thead>
                                    {paymentsArray.map((payment, index) => {
                                        return (
                                            <tbody key={index}>
                                            <tr>
                                                <td style={{'minWidth':'80%'}}>
                                                    <a target='_blank' href={`${payment.paymentImage}`}>
                                                        <img src={payment.paymentImage} alt="" />
                                                    </a>
                                                </td>
                                                <td style={{'minWidth':'100%'}}>{payment.orderId}
                                                    <div className="mobile-cart-content row">
                                                        {/* <div className="col-xs-3">
                                                            <p>in stock</p>
                                                        </div> */}
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color">{payment.paymentId}
                                                           </h2>
                                                        </div>
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color">
                                                               {payment.paymentStatus}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{'minWidth':'100%'}}>{payment.paymentId}
                                                   </td>
                                                <td style={{'minWidth':'100%'}}>
                                                   {
                                                       payment.paymentStatus == 'Verified'?<p style={{color:'white',padding:'2px',backgroundColor:'darkgreen'}}>{payment.paymentStatus}</p>:<p style={{color:'white',padding:'2px',backgroundColor:'darkorange'}}>{payment.paymentStatus}</p>
                                                   } 
                                                </td>
                                                <td style={{'minWidth':'80%'}}>
                                                    {`${this.toDateTime(payment.paidAt.seconds)}`}
                                                </td>
                                            </tr>
                                            </tbody> )
                                    })}
                                </table>
                            </div>
                        </div>
                       
                    </div>
                </section>
                :
                <section className="cart-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div >
                                    <div className="col-sm-12 empty-cart-cls text-center">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/empty-wishlist.png`} className="img-fluid mb-4" alt="" />
                                        <h3>
                                            <strong>You haven't make any payments so far</strong>
                                        </h3>
                                        <h4>Explore more shortlist some items.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                }
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
    currentUser: state.user.currentUser,
    paymentsArray: state.user.currentUser.paymentsArray,
    symbol: state.data.symbol,
})

export default connect(mapStateToProps,{addToCartAndRemoveWishlist, removeFromWishlist})(MyPayments)