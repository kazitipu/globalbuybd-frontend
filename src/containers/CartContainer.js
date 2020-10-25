import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import CartPage from '../components/common/headers/common/cart-header'
import {removeFromCart} from '../actions'
import {removeCartItemFromFirestore,auth} from '../firebase/firebase.utils'
import {getCartTotal} from '../services'

class CartContainer extends React.Component{
    removeFromReduxAndFirestoreCart =(product)=>{
        const {removeFromCart} = this.props
        removeFromCart(product)
        auth.onAuthStateChanged((userAuth)=>removeCartItemFromFirestore(userAuth,product))       
    }
    
    render(){
        const {cartList, total, symbol} = this.props;
        return(
            <li  className="onhover-div mobile-cart"><div className="cart-qty-cls" style={{'zIndex':5}}>{cartList.length}</div>
               <Link to={`${process.env.PUBLIC_URL}/cart`}><img src={`${process.env.PUBLIC_URL}/assets/images/icon/cart.png`} className="img-fluid" alt=""/>
                   <i className="fa fa-shopping-cart"></i></Link>
               <ul className="show-div shopping-cart">
                   { cartList.map((item,index) => (
                       <CartPage key={index} item={item} total={total} symbol={symbol} removeFromCart={() => this.removeFromReduxAndFirestoreCart(item)}  />
                   ))}
                   {(cartList.length > 0) ?
                       <div>
                   <li>
                       <div className="total">
                           <h5>subtotal : <span>{symbol}{total}</span></h5>
                       </div>
                   </li>
                   <li>
                       <div className="buttons">
                           <Link to={`${process.env.PUBLIC_URL}/cart`} className="view-cart">view cart</Link>
                           <Link to={`${process.env.PUBLIC_URL}/checkout`} className="checkout">checkout</Link>
                       </div>
                   </li></div>
                           :
                   <li><h5>Your cart is currently empty.</h5></li>}
               </ul>
       
           </li>
       )
    }
} 


function mapStateToProps(state) {
    return {
        cartList: state.cartList.cart,
        total: getCartTotal(state.cartList.cart),
        symbol: state.data.symbol,
    }
}

export default connect(mapStateToProps, {removeFromCart})(CartContainer);
