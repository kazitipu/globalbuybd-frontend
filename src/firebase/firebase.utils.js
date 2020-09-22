import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { v4 as uuidv4 } from 'uuid'
import collection from "../components/layouts/pets/collection";
import { getCartTotal } from "../services";

var firebaseConfig = {
  apiKey: "AIzaSyD_y8loznUuaKya6oq1OLwq1KhcG44VKC4",
  authDomain: "globalbuybd-auth.firebaseapp.com",
  databaseURL: "https://globalbuybd-auth.firebaseio.com",
  projectId: "globalbuybd-auth",
  storageBucket: "globalbuybd-auth.appspot.com",
  messagingSenderId: "676138681404",
  appId: "1:676138681404:web:3267a9d87604d4309f6f39",
  measurementId: "G-35EHNYN8E9"
};
firebase.initializeApp(firebaseConfig);

export var googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export var facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: "select_account", display: 'popup' });

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
// add item to firestore cart start
export const addCartItemTofirestore =async (userAuth,product,qty)=>{
  if (!userAuth) return;
  const cartRef = firestore.doc(`carts/${userAuth.uid}`);
  const snapShot =await cartRef.get()

  if (!snapShot.exists){
    try {
      await cartRef.set({
        cart:[{...product, qty, sum: (product.price*product.discount/100)*(qty)}]
      });
    } catch (error) {
      console.log("error creating cartProduct", error.message);
    }
  }else {
    if (snapShot.data().cart.findIndex(item => item.id === product.id) !== -1) {
      const cart = snapShot.data().cart.reduce((cartAcc, item) => {
          if (item.id === product.id) {
              cartAcc.push({ ...item, qty: item.qty+1, sum: (item.price*item.discount/100)*(item.qty+1) }) // Increment qty
          } else {
              cartAcc.push(item)
          }

          return cartAcc
      }, [])
      try{
        await cartRef.update({
          cart
        })

      }catch(error){
        alert(error)
      }   
    }else{
      try{
        await cartRef.update({
        cart:[...snapShot.data().cart,{...product, qty, sum: (product.price*product.discount/100)*(qty)}]
        })
      }catch(error){
        alert(error)
      }
    }
  }    
}

export const decrementCartItemFromFirestore = async (userAuth,product) =>{
  if (!userAuth) return;
  const cartRef = firestore.doc(`carts/${userAuth.uid}`);
  const snapShot =await cartRef.get()
  if (!snapShot.exists){
    return
  }else{
    if (snapShot.data().cart.findIndex(item=>item.id === product.id) !== -1){
      const cart = snapShot.data().cart.reduce((cartAcc, item)=>{
        if (item.id === product.id && item.qty >= 1){
          cartAcc.push({...item, qty:item.qty-1,sum:(item.price*item.discount/100)*(item.qty-1)})
        }
        else{
          cartAcc.push(item)
        }
        return cartAcc;
      },[])
      const newCart = cart.filter(item=>item.qty !==0)
      try{
        await cartRef.update({
          cart: newCart
        })
      }catch(error){
        alert(error)
      }
    }
  }
}

export const removeCartItemFromFirestore =async (userAuth,product) =>{
  if (!userAuth)return;
  const cartRef = firestore.doc(`carts/${userAuth.uid}`)
  const snapShot =await cartRef.get()
  if (!snapShot.exists){
    return
  }else{
    const cart = snapShot.data().cart.filter((item)=>item.id !== product.id)
    try{
      await cartRef.update({cart})
    }catch(error){
      alert(error)
    }
  }
}
// add item to firestore cart finished

// add item to firestore wishlist

export const addWishlistTofirestore =async (userAuth,product)=>{
  if (!userAuth) return
  const wishlistRef = firestore.doc(`wishlists/${userAuth.uid}`)
  const snapShot = await wishlistRef.get()
  if (!snapShot.exists){
    wishlistRef.set({wishlist:[product]})
  }else{
    if (snapShot.data().wishlist.findIndex(item=>item.id === product.id) !==-1){
      return
    }else {
      wishlistRef.update({
        wishlist:[...snapShot.data().wishlist, product]
      })
    }
  }
}

export const removeFromWishlistFirestore = async (userAuth, product) =>{
  if (!userAuth) return
  const wishlistRef = firestore.doc(`wishlists/${userAuth.uid}`)
  const snapShot = await wishlistRef.get()
  const wishlist = snapShot.data().wishlist.filter(item=>item.id !==product.id)
  wishlistRef.update({wishlist})
}

export const addToCartAndRemoveWishlistFirestore = async (userAuth,product,qty)=>{
  await addCartItemTofirestore(userAuth,product,qty)
  await removeFromWishlistFirestore(userAuth,product)

}

// wishlist ended

// orders start 
export const addCartItemsToOrdersFirestore=(userAuth,ordersArray) =>{
  if (!userAuth) return;
  const sum = getCartTotal(ordersArray)
  const ordersRef = firestore.doc(`orders/${uuidv4()}`)
  ordersRef.set({
    userId:userAuth.uid,
    orders:ordersArray,
    sum
  })
}

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const singInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default firebase;
