import React, {Component} from 'react';
import Breadcrumb from "../../common/breadcrumb";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { addToCartAndRemoveWishlistFirestore, removeFromWishlistFirestore,auth } from '../../../firebase/firebase.utils';
import { addToCartAndRemoveWishlist, removeFromWishlist } from '../../../actions';

class MyWishlist extends Component {

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
    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }

    closeAdminNav =()=>{
        this.setState({adminNav:false, style:{left:'-350px'}})
    }

    openAdminNav =()=>{
        this.setState({adminNav:true, style:{left:'-10px'}})
    }

    removeFromReduxAndFirestoreWishlist =(item)=>{
        auth.onAuthStateChanged(async userAuth =>await removeFromWishlistFirestore(userAuth,item))
        this.props.removeFromWishlist(item)
    }

    addToCartAndRemoveWishlistFromReduxAndFirestore =(item,qty)=>{
        auth.onAuthStateChanged(async userAuth=>addToCartAndRemoveWishlistFirestore(userAuth,item,qty))
        this.props.addToCartAndRemoveWishlist(item,qty)
    }

    render (){
        const {Items, symbol} = this.props;
       


        return (
            <div>
                <Breadcrumb title={'Dashboard/My wishlist'}/>
                
                
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
                                            <li  style={{'color':'orange'}} onClick={this.closeAdminNav}><Link  style={{'color':'orange'}} to="/pages/dashboard">Account Info</Link></li>
                                            <li style={{'color':'orange'}} onClick={this.closeAdminNav}><Link  style={{'color':'orange'}} to="/pages/dashboard/my-orders">My Orders</Link></li>
                                            <li style={{'color':'orange'}} onClick={this.closeAdminNav}><Link  style={{'color':'orange'}} to="/pages/dashboard/my-cart">My Cart</Link></li>
                                            <li className='active' style={{'color':'orange'}} onClick={this.closeAdminNav}><Link to="/pages/dashboard/my-wishlist">My Wishlist</Link></li>
                                            <li style={{'color':'orange'}} onClick={this.closeAdminNav}><Link style={{'color':'orange'}} to="/pages/dashboard/my-payments">My Payments</Link></li>
                                            {/* <li><a href="#">Newsletter</a></li>
                                            <li><a href="#">My Account</a></li>
                                            <li><a href="#">Change Password</a></li> */}
                                            <li className="last"  style={{'color':'orange'}} onClick={this.closeAdminNav}><div  style={{'color':'orange'}} style={{'cursor':'pointer'}} onClick={this.handleLogOutClick}>Log Out</div></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="dashboard-right">
                                    <div className="dashboard">
                                    {Items.length>0 ?
                <section className="wishlist-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <table className="table cart-table table-responsive-xs">
                                    <thead>
                                    <tr className="table-head">
                                        <th scope="col">image</th>
                                        <th scope="col">product name</th>
                                        <th scope="col">price</th>
                                        <th scope="col">availability</th>
                                        <th scope="col">action</th>
                                    </tr>
                                    </thead>
                                    {Items.map((item, index) => {
                                        return (
                                            <tbody key={index}>
                                            <tr>
                                                <td style={{'minWidth':'100%'}}>
                                                    <Link to={`${process.env.PUBLIC_URL}/product/${item.id}`}>
                                                        <img src={item.pictures[0]} alt="" />
                                                    </Link>
                                                </td>
                                                <td style={{'minWidth':'100%'}}><Link to={`${process.env.PUBLIC_URL}/product/${item.id}`}>{item.name}</Link>
                                
                                                </td>
                                                <td style={{'minWidth':'100%'}}><h2>{symbol}{item.salePrice}
                                                     <del><span className="money">{symbol}{item.price}</span></del></h2></td>
                                                <td style={{'minWidth':'100%'}}>
                                                   {
                                                       item.availability == 'in-stock'?<p style={{'color':'green'}}>{item.availability}</p>:<p style={{'color':'orange'}}>{item.availability}</p>
                                                   } 
                                                </td>
                                                <td style={{'minWidth':'100%'}}>
                                                    <a href="javascript:void(0)" className="icon" onClick={() => this.removeFromReduxAndFirestoreWishlist(item)}>
                                                        <i className="fa fa-times"></i>
                                                    </a>
                                                    <Link to={`/product/${item.id}`} className="cart">
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                            </tbody> )
                                    })}
                                </table>
                            </div>
                        </div>
                        <div className="row wishlist-buttons">
                            <div className="col-12">
                                <Link to={`${process.env.PUBLIC_URL}/collection/in-stock`} className="btn btn-solid">continue shopping</Link>
                                {/* <Link to={`${process.env.PUBLIC_URL}/checkout`} className="btn btn-solid">check out</Link> */}
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
                                            <strong>WhishList is Empty</strong>
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
    Items: state.wishlist.list,
    symbol: state.data.symbol,
})

export default connect(mapStateToProps,{addToCartAndRemoveWishlist, removeFromWishlist})(MyWishlist)