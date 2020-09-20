import React, {Component} from 'react';
// Custom Components
import HeaderOne from './common/headers/header-one';
import HeaderTwo from './common/headers/header-two';
import HeaderThree from './common/headers/header-three';

import FooterOne from "./common/footers/footer-one";
import FooterTwo from "./common/footers/footer-two";
import FooterThree from "./common/footers/footer-three";
import {auth, createUserProfileDocument} from '../firebase/firebase.utils'
import {connect} from 'react-redux'
import {setCurrentUser} from '../actions'
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
        }else {
            this.props.setCurrentUser({ displayName: "", email: "" });
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
  console.log(state.cartList.cart)
  
  
  return{
    currentUser:state.user,
    cartItems: state.cartList
}}
export default connect(mapStateToProps,{setCurrentUser})(App);
