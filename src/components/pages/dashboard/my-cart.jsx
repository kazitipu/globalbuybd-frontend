import React, {Component} from 'react';
import Breadcrumb from "../../common/breadcrumb";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeFromCart, incrementQty, decrementQty} from '../../../actions'
import {getCartTotal} from "../../../services";
import {addCartItemTofirestore,decrementCartItemFromFirestore,removeCartItemFromFirestore,auth} from '../../../firebase/firebase.utils'

class MyCart extends Component {

    constructor (props) {
        super (props)
    }

    removeFromReduxAndFirestoreCart = (item) =>{
        auth.onAuthStateChanged(async userAuth=>await removeCartItemFromFirestore(userAuth,item))
        this.props.removeFromCart(item)      
    }

    decrementReduxAndFirestoreQty = (item) =>{
        auth.onAuthStateChanged(async userAuth=>await decrementCartItemFromFirestore(userAuth,item))
        this.props.decrementQty(item.id)
    }

    incrementReduxAndFirestoreQty = (item, qty) =>{
        auth.onAuthStateChanged(async userAuth =>await addCartItemTofirestore(userAuth,item,qty))
        this.props.incrementQty(item,qty)
    }
    handleLogOutClick =() =>{
        auth.signOut()
        this.props.history.push('/')
    }

    render (){
        const {currentUser,cartItems,symbol,total} = this.props

        return (
            <div>
                <Breadcrumb title={'Dashboard/My cart'}/>
                
                
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
                                            <li style={{'color':'orange'}}><Link style={{'color':'orange'}} to="/pages/dashboard/my-orders">My Orders</Link></li>
                                            <li className="active"><Link to="/pages/dashboard/my-cart">My Cart</Link></li>
                                            <li style={{'color':'orange'}}><Link style={{'color':'orange'}} to="/pages/dashboard/my-wishlist">My Wishlist</Link></li>
                                            {/* <li><a href="#">Newsletter</a></li>
                                            <li><a href="#">My Account</a></li>
                                            <li><a href="#">Change Password</a></li> */}
                                            <li className="last" style={{'color':'orange'}}><div style={{'color':'orange'}} style={{'cursor':'pointer'}} onClick={this.handleLogOutClick}>Log Out</div></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="dashboard-right">
                                    <div className="dashboard">
                                    {cartItems.length>0 ?
                <section className="cart-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <table className="table cart-table table-responsive-xs">
                                    <thead>
                                    <tr className="table-head">
                                        <th scope="col">image</th>
                                        <th scope="col">product name</th>
                                        <th scope="col">price</th>
                                        <th scope="col">quantity</th>
                                        <th scope="col">action</th>
                                        <th scope="col">total</th>
                                    </tr>
                                    </thead>
                                    {cartItems.map((item, index) => {
                                        return (
                                        <tbody key={index}>
                                            <tr>
                                                <td style={{'minWidth':'100%'}}>
                                                    <Link to={`${process.env.PUBLIC_URL}/product/${item.id}`}>
                                                        <img src={item.pictures[0]} alt="" />
                                                    </Link>
                                                </td>
                                                <td style={{'minWidth':'100%'}}><Link to={`${process.env.PUBLIC_URL}/product/${item.id}`}>{item.name}</Link>
                                                    <div className="mobile-cart-content row">
                                                        <div className="col-xs-3">
                                                            <div className="qty-box">
                                                                <div className="input-group">
                                                                    <input type="text" name="quantity" readOnly={true}
                                                                           className="form-control input-number" defaultValue={item.qty} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color">{symbol}{item.salePrice}</h2>
                                                        </div>
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color">
                                                                <div className="icon" style={{'cursor':'pointer'}} onClick={() => this.removeFromReduxAndFirestoreCart(item)}>
                                                                    <i className="icon-close"></i>
                                                                </div>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{'minWidth':'100%'}}><h2>{symbol}{item.salePrice}</h2></td>
                                                <td>
                                                    <div className="qty-box">
                                                        <div className="input-group">
                                                            <span className="input-group-prepend">
                                                                <button type="button" className="btn quantity-left-minus" onClick={() => this.decrementReduxAndFirestoreQty(item)} data-type="minus" data-field="">
                                                                 <i className="fa fa-angle-left"></i>
                                                                </button>
                                                            </span>
                                                            <input type="text" name="quantity" value={item.qty} readOnly={true} className="form-control input-number" />

                                                            <span className="input-group-prepend">
                                                            <button className="btn quantity-right-plus" onClick={() => this.incrementReduxAndFirestoreQty(item, 1)}  data-type="plus" disabled={(item.qty >= item.stock)? true : false}>
                                                            <i className="fa fa-angle-right"></i>
                                                            </button>
                                                           </span>
                                                        </div>
                                                    </div>{(item.qty >= item.stock)? 'out of Stock' : ''}
                                                </td>
                                                <td style={{'minWidth':'100%'}}>
                                                    <div className="icon" style={{'cursor':'pointer'}} onClick={() => this.removeFromReduxAndFirestoreCart(item)}>
                                                        <i className="fa fa-times"></i>
                                                    </div>
                                                </td>
                                                <td style={{'minWidth':'100%'}}><h2 className="td-color">{symbol}{item.salePrice * item.qty}</h2></td>
                                            </tr>
                                        </tbody> )
                                    })}
                                </table>
                                <table className="table cart-table table-responsive-md">
                                    <tfoot>
                                    <tr>
                                        <td >total price :</td>
                                        <td className='cart-total-black' style={{'paddingRight':'0px'}}><h2>{symbol} {total} </h2></td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <div className="row cart-buttons">
                            <div className="col-6">
                                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} className="btn btn-solid">continue shopping</Link>
                            </div>
                            <div className="col-6">
                                <Link to={`${process.env.PUBLIC_URL}/checkout`} className="btn btn-solid">check out</Link>
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
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/icon-empty-cart.png`} className="img-fluid mb-4" alt="" />
                                        <h3>
                                            <strong>Your Cart is Empty</strong>
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
    cartItems: state.cartList.cart,
    symbol: state.data.symbol,
    total: getCartTotal(state.cartList.cart)

})

export default connect(mapStateToProps, {removeFromCart, incrementQty, decrementQty})(MyCart)