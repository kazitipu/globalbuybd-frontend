import React, {Component} from 'react';
// Custom Components
import HeaderOne from './common/headers/header-one';
import HeaderTwo from './common/headers/header-two';
import HeaderThree from './common/headers/header-three';

import FooterOne from "./common/footers/footer-one";
import FooterTwo from "./common/footers/footer-two";
import FooterThree from "./common/footers/footer-three";
import {auth, createUserProfileDocument,firestore} from '../firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser,setReduxCart,setReduxWishlist} from '../actions'
// ThemeSettings
import ThemeSettings from "./common/theme-settings"



class App extends Component {

    unsuscribeFromAuth = null;

    componentDidMount() {
      
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
  
          userRef.onSnapshot((snapShot) => {
            this.props.setCurrentUser({ id: snapShot.id, ...snapShot.data() });
          });
          const cartRef = firestore.doc(`carts/${userAuth.uid}`);
          cartRef.onSnapshot((snapShot) =>{
            if (snapShot.exists){
              this.props.setReduxCart(snapShot.data().cart)
            }
          });
          const wishlistRef = firestore.doc(`wishlists/${userAuth.uid}`)
          wishlistRef.onSnapshot((snapShot)=>{
            if (snapShot.exists){
              this.props.setReduxWishlist(snapShot.data().wishlist)
            }  
          })
        }else {
            this.props.setCurrentUser({ displayName: "", email: "" });
            this.props.setReduxCart([])
            this.props.setReduxWishlist([])
        }
      });
    }
  
    componentWillUnmount() {
      const {cartItems} = this.props
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth,cartItems);
  
          userRef.onSnapshot((snapShot) => {
            this.props.setCurrentUser({ id: snapShot.id, ...snapShot.data() });
          });
        }else {
            this.props.setCurrentUser({ displayName: "", email: "", password: "" });
        }
      });
      this.unsubscribeFromAuth();
    }

    render() {
      console.log(this.props)
        return (
            <div>
                <HeaderThree logoName={'logo/14.png'}/>
                {this.props.children}
                <FooterOne logoName={'logo/14.png'}/>

                <ThemeSettings />

            </div>
        );
    }
}

const mapStateToProps=(state)=>{
  return{
    currentUser:state.user,
    cartItems: state.cartList
}}
export default connect(mapStateToProps,{setCurrentUser,setReduxCart,setReduxWishlist})(App);
