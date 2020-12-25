import React, {Component} from 'react';
import Breadcrumb from "../../common/breadcrumb";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { addToCartAndRemoveWishlistFirestore, removeFromWishlistFirestore,auth } from '../../../firebase/firebase.utils';
import { addToCartAndRemoveWishlist, removeFromWishlist } from '../../../actions';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import './my-order.css'

class MyOrders extends Component {

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
                                            <li style={{'color':'orange'}} onClick={this.closeAdminNav}><Link style={{'color':'orange'}} to="/pages/dashboard">Account Info</Link></li>
                                            <li className='active' onClick={this.closeAdminNav} ><Link to="/pages/dashboard/my-orders">My Orders</Link></li>
                                            <li style={{'color':'orange'}} onClick={this.closeAdminNav} ><Link style={{'color':'orange'}} to="/pages/dashboard/my-cart">My Cart</Link></li>
                                            <li style={{'color':'orange'}} onClick={this.closeAdminNav} ><Link style={{'color':'orange'}} to="/pages/dashboard/my-wishlist">My Wishlist</Link></li>
                                            <li style={{'color':'orange'}} onClick={this.closeAdminNav} ><Link style={{'color':'orange'}} to="/pages/dashboard/my-payments">My Payments</Link></li>
                                            {/* <li><a href="#">Newsletter</a></li>
                                            <li><a href="#">My Account</a></li>
                                            <li><a href="#">Change Password</a></li> */}
                                            <li className="last" style={{'color':'orange'}} onClick={this.closeAdminNav}><div  style={{'color':'orange'}} style={{'cursor':'pointer'}} onClick={this.handleLogOutClick}>Log Out</div></li>
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
                                        <th scope="col">Order Id</th>
                                        <th scope="col">Products</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">status</th>
                                        <th scope="col">paymentStatus</th>
                                        <th scope="col">pay</th>
                                    </tr>
                                    </thead>
                                    {ordersArray.map((order) => {
                                        return (
                                            <tbody key={order.orderId}>
                                            <tr>
                                                <td style={{'minWidth':'100%'}}>{order.orderId}
                                                   
                                                        {/* <div className="col-xs-3">
                                                            <p>in stock</p>
                                                        </div> */}
                                                        {/* <div className="col-xs-3">
                                                            <h2 className="td-color">{symbol}{order.sum}
                                                            </h2>
                                                        </div> */}
                                                        {/* <div className="col-xs-3">
                                                            <h2 className="td-color">
                                                                <a href="javascript:void(0)" className="icon">
                                                                    <i className="fa fa-times"></i>
                                                                </a>
                                                                <a href="javascript:void(0)" className="cart" >
                                                                    <i className="fa fa-shopping-cart"></i>
                                                                </a>
                                                            </h2>
                                                        </div> */}
                                                   
                                                </td>
                                                <td style={{'minWidth':'100%'}}><OverlayTrigger
                trigger="click"
                placement='bottom'
                overlay={
                  <Popover id={`popover-positioned-bottom`}   style={{minWidth:'30%'}}>
                    <Popover.Title as="h3">{`Order Id: ${order.orderId}`}</Popover.Title>
                    <Popover.Content className='popover-body-container'>
                        {
                            order.order.length >0?order.order.map(order=><div className='order-details-flexbox' key={order.id}>
                            <div>
                                <img style={{maxWidth:'25%'}} src={order.colorUrl?order.colorUrl:order.pictures[0]}/> <br/>
                               <strong>{`${order.salePrice} × ${order.qty}`} = {order.sum} tk</strong><br/>
                          </div>
                          <div>
                          product Id:{order.id} <br/>
                           {order.color?`color: ${order.color},`:''} {order.sizeOrShipsFrom?`sizeOrShipsfrom: ${order.sizeOrShipsFrom}`:''} <br/>
                          </div>
                          </div>):''
                        }
                        
                       
                    </Popover.Content>
                  </Popover>
                }
              >
                <button className='btn btn-warning' style={{padding:'4px', color:'white',backgroundColor:'darkorange'}}
                      >view</button>
              </OverlayTrigger>
            </td>
                                                <td style={{'minWidth':'100%'}}><h2>{symbol}{order.sum} <span className='mobile-payment-button'> {order.paymentStatus.due == 0?<div style={{'minWidth':'100%'}}><div  className='btn btn-warning' style={{textTransform:'capitalize', padding:'0px',color:'white',backgroundColor:'darkgreen',fontFamily:'initial'}}>&#10003;paid</div>
                                                    </div>:<div style={{'minWidth':'100%'}}><Link to={`/order-success/${order.orderId}` } className='btn btn-warning' style={{padding:'0px', color:'white', backgroundColor:'darkorange',maxWidth:'50%',marginLeft:'1.7rem'}}>pay</Link>
                                                </div>}</span>
                                                    </h2></td>
                                                <td style={{'minWidth':'100%'}}>
                                                    <p>{order.status}</p>
                                                </td>
                                                <td style={{'minWidth':'100%'}}>
                                                <OverlayTrigger
                trigger="click"
                placement='bottom'
                overlay={
                  <Popover id={`popover-positioned-bottom`}   style={{minWidth:'20%'}}>
                    <Popover.Title as="h3">{`Order Id: ${order.orderId}`}</Popover.Title>
                    <Popover.Content className='popover-body-container'>
                       Paid: {order.paymentStatus.paid} tk <br/>
                       Total: {order.paymentStatus.total} tk <br/>
                       Due: {order.paymentStatus.due} tk <br/>
                    </Popover.Content>
                  </Popover>
                }
              >
                <button className='btn btn-warning' style={{padding:'4px', color:'white', backgroundColor:'darkorange'}}
                      >view</button>
              </OverlayTrigger>
                                                </td>
                                                {order.paymentStatus.due == 0?<td style={{'minWidth':'100%'}}><div  className='btn btn-warning' style={{padding:'0px',color:'white',backgroundColor:'darkgreen',fontFamily:'initial',textTransform:'capitalize'}}>&#10003;paid</div>
                                                    </td>:<td style={{'minWidth':'100%'}}><Link to={`/order-success/${order.orderId}` } className='btn btn-warning' style={{padding:'4px', color:'white',backgroundColor:'darkorange'}}>pay</Link>
                                                </td>}
                                            </tr>
                                            </tbody> )
                                    })}
                                </table>
                            </div>
                        </div>
                        <div className="row wishlist-buttons">
                            <div className="col-12">
                                <Link to={`${process.env.PUBLIC_URL}/collection/in-stock`} className="btn btn-solid" style={{backgroundColor:'darkorange'}}>continue shopping</Link>
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