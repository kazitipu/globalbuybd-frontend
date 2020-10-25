import React, {Component} from 'react';
import Breadcrumb from "../../common/breadcrumb";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { addToCartAndRemoveWishlistFirestore, removeFromWishlistFirestore,auth } from '../../../firebase/firebase.utils';
import { addToCartAndRemoveWishlist, removeFromWishlist } from '../../../actions';

class MyOrders extends Component {

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

    render (){
        const {Items, symbol,ordersArray} = this.props;
      if (ordersArray)
       
     
    { ordersArray.map((order)=>{

    
            var keys = Object.keys(order.status);

        var filtered = keys.filter((key)=> {
             return order.status[key]
});
console.log(filtered)
})}


        return (
            <div>
                <Breadcrumb title={'Dashboard/My orders'}/>
                
                
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
                                            <li style={{'color':'orange'}}><Link style={{'color':'orange'}} to="/pages/dashboard">Account Info</Link></li>
                                            <li className='active' ><Link to="/pages/dashboard/my-orders">My Orders</Link></li>
                                            <li style={{'color':'orange'}}><Link style={{'color':'orange'}} to="/pages/dashboard/my-cart">My Cart</Link></li>
                                            <li style={{'color':'orange'}}><Link style={{'color':'orange'}} to="/pages/dashboard/my-wishlist">My Wishlist</Link></li>
                                            {/* <li><a href="#">Newsletter</a></li>
                                            <li><a href="#">My Account</a></li>
                                            <li><a href="#">Change Password</a></li> */}
                                            <li className="last" style={{'color':'orange'}}><div  style={{'color':'orange'}} style={{'cursor':'pointer'}} onClick={this.handleLogOutClick}>Log Out</div></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="dashboard-right">
                                    <div className="dashboard">
                                    {ordersArray?
                <section className="wishlist-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <table className="table cart-table table-responsive-xs">
                                    <thead>
                                    <tr className="table-head">
                                        <th scope="col">image</th>
                                        <th scope="col">Order Id</th>
                                        <th scope="col">price</th>
                                        <th scope="col">availability</th>
                                        <th scope="col">action</th>
                                    </tr>
                                    </thead>
                                    {ordersArray.map((order) => {
                                        return (
                                            <tbody key={order.orderId}>
                                            <tr>
                                                <div style={{'minWidth':'100%'}}>
                                                    {order.order.map(item=>
                                                      <img src={item.pictures[0]} alt="" style={{'width':'10%'}} />)
                                                    }  
                                                </div> 
                                                <td style={{'minWidth':'100%'}}>{order.orderId}
                                                    <div className="mobile-cart-content row">
                                                        {/* <div className="col-xs-3">
                                                            <p>in stock</p>
                                                        </div> */}
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color">{symbol}{order.sum}
                                                            </h2>
                                                        </div>
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color">
                                                                <a href="javascript:void(0)" className="icon">
                                                                    <i className="fa fa-times"></i>
                                                                </a>
                                                                <a href="javascript:void(0)" className="cart" >
                                                                    <i className="fa fa-shopping-cart"></i>
                                                                </a>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{'minWidth':'100%'}}><h2>{symbol}{order.sum}
                                                    </h2></td>
                                                <td style={{'minWidth':'100%'}}>
                                                    <p>Order Pending</p>
                                                </td>
                                                <td style={{'minWidth':'100%'}}>
                                                    <a href="javascript:void(0)" className="icon" >
                                                        <i className="fa fa-times"></i>
                                                    </a>
                                                    <a href="javascript:void(0)" className="cart" >
                                                        <i className="fa fa-shopping-cart"></i>
                                                    </a>
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
                                            <strong>Please make an order first</strong>
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
    ordersArray:state.user.currentUser.ordersArray,
    symbol: state.data.symbol,
})

export default connect(mapStateToProps,{addToCartAndRemoveWishlist, removeFromWishlist})(MyOrders)