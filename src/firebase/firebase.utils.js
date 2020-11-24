import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"
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
export const storage = firebase.storage();

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
        ordersArray:[],
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
        cart:[{...product, qty, sum:(typeof product.salePrice == 'string'? product.salePrice.includes('-')?product.salePrice.split('-')[1]:parseInt(product.salePrice):product.salePrice) * parseInt(qty)}]
      });
    } catch (error) {
      console.log("error creating cartProduct", error.message);
    }
  }else {
    var sameVariant =snapShot.data().cart.filter(item=>{
      if (item.id=== product.id &&  (item.sizeOrShipsFrom?item.sizeOrShipsFrom === product.sizeOrShipsFrom:true)){
        if (item.color?item.color === product.color:true){
          return item
        }
      }})

    if ((snapShot.data().cart.findIndex(item => item.id === product.id) !== -1) && sameVariant.length >0) { 
        var cart = snapShot.data().cart.reduce((cartAcc, item) => {
         
          if (item.id === product.id && (item.color?item.color === product.color:true)) {
            if (item.sizeOrShipsFrom?item.sizeOrShipsFrom === product.sizeOrShipsFrom:true ){
              cartAcc.push({ ...item, qty: parseInt(item.qty)+parseInt(qty), sum:(typeof item.salePrice == 'string'? (item.salePrice.includes('-')? item.salePrice.split('-')[1]:parseInt(item.salePrice)):item.salePrice )* parseInt(parseInt(item.qty)+parseInt(qty)) }) // Increment qty           
            }

          }else{
            cartAcc.push(item)
          }
          return cartAcc
      }, [])
      try{
        await cartRef.update({
          cart
        })

      }catch(error){
        alert(error, 'error in the first block')
      }
      
      
    }else{
      try{
        await cartRef.update({
        cart:[...snapShot.data().cart,{...product, qty, sum:(typeof product.salePrice == 'string'? (product.salePrice.includes('-')? product.salePrice.split('-')[1]:parseInt(product.salePrice)):product.salePrice) * parseInt(qty) }]
        })
      }catch(error){
        alert(error,'error in the else block')
      }
    }
    sameVariant=[]
  }    
}

export const decrementCartItemFromFirestore = async (userAuth,product) =>{
  if (!userAuth) return;
  const cartRef = firestore.doc(`carts/${userAuth.uid}`);
  const snapShot =await cartRef.get()
  if (!snapShot.exists){
    return
  }else{
    var sameVariant =snapShot.data().cart.filter(item=>{
      if (item.id=== product.id &&  (item.sizeOrShipsFrom?item.sizeOrShipsFrom === product.sizeOrShipsFrom:true)){
        if (item.color?item.color === product.color:true){
          return item
        }
      }})
    if ((snapShot.data().cart.findIndex(item=>item.id === product.id) !== -1) && sameVariant.length >0){
      const cart = snapShot.data().cart.reduce((cartAcc, item)=>{
        if (item.id === product.id && item.qty >= 1){
          if ((item.color?item.color === product.color:true) && (item.sizeOrShipsFrom?item.sizeOrShipsFrom === product.sizeOrShipsFrom:true)){
            cartAcc.push({...item, qty:item.qty-1,sum:(typeof item.salePrice == 'string'? (item.salePrice.includes('-')? item.salePrice.split('-')[1]:parseInt(item.salePrice)):item.salePrice)*(parseInt(item.qty)-1)})
          }
          
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
    var cart =[]
     snapShot.data().cart.forEach((cartItem)=>{
      if (cartItem.id !== product.id){
          cart.push(cartItem)
      }else{
          if (cartItem.color !== product.color){
              cart.push(cartItem)
          }else{
              if (cartItem.sizeOrShipsFrom !== product.sizeOrShipsFrom){
                  cart.push(cartItem)
              }}
      }
  
  })
    try{
      await cartRef.update({cart})
    }catch(error){
      alert(error)
    }
  }
}

export const removeAllCartItemFromFirestore = async (userAuth,cartItem)=>{
  if (!userAuth)return;
  const cartRef = firestore.doc(`carts/${userAuth.uid}`)
  cartRef.delete()
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
  // await removeFromWishlistFirestore(userAuth,product)

}

// wishlist ended

// orders start 


const GenerateUniqueID =()=> {
  return ('0000'+(Math.random() * (100000 - 101) + 101)).slice(-5);
}

export const addCartItemsToOrdersFirestore=async(userAuth,ordersArray,billingAddress) =>{
  if (!userAuth) return;
  const sum = getCartTotal(ordersArray)
  const paid = 0
  const uniqueId = 'gbb' + GenerateUniqueID()
  const orderRef = firestore.doc(`orders/${uniqueId}`)
  try{
  await orderRef.set({
    userId:userAuth.uid,
    otherInformation: billingAddress,
    order:ordersArray,
    sum,
    status:'order_pending',
    orderedAt: new Date()
    ,
    paymentStatus:{
      paid,
      due:parseInt(sum) - parseInt(paid),
      total:sum
    }
  })
  const snapShot = await orderRef.get()
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapShot =await userRef.get()
  const previousOrdersArray = userSnapShot.data().ordersArray?userSnapShot.data().ordersArray:[]
  try{
    await userRef.update({
      ordersArray:[...previousOrdersArray, {...snapShot.data(),orderId:uniqueId}],
      shippingAddress:billingAddress
    })
  }catch(error){
    alert('error creating order. try again later', error)
  }

  console.log(snapShot.data())
  return {...snapShot.data(), orderId:uniqueId}

}catch(error){
    alert('error creating order. please try again',error)
  }
}

// getting all products from firestore 
export const getAllFirestoreProducts = async()=>{
  const productsCollectionRef = firestore.collection('products')
  try{
    const products =await productsCollectionRef.get()
    const productsArray = []
    products.forEach((doc)=>{
      // console.log(doc.id, " => ", doc.data())
      productsArray.push(doc.data())
    })
    return productsArray;
  }catch(error){
    alert(error)
  }
}

export const getAllFirestoreAliProductsList = async()=>{
  const aliProductsCollectionRef = firestore.collection('aliproducts')
  try{
    const products =await aliProductsCollectionRef.get()
    const aliProductsArray = []
    products.forEach((doc)=>{
      // console.log(doc.id, " => ", doc.data())
      var originalPrice =[]
      if (doc.data().originalPrice.min == doc.data().originalPrice.max){
        originalPrice.push(Math.round(doc.data().originalPrice.min * 90))
      } else{
        originalPrice.push(`${Math.round(doc.data().originalPrice.min * 90)}- ${Math.round(doc.data().originalPrice.max * 90)}`)
      }
      var salePrice =[]
      if (doc.data().salePrice.min == doc.data().salePrice.max){
        salePrice.push(Math.round(doc.data().salePrice.min * 90))
      } else{
        salePrice.push(`${Math.round(doc.data().salePrice.min * 90)}- ${Math.round(doc.data().salePrice.max * 90)}`)
      }
      const newObj ={
          id:doc.data().productId,
          name:doc.data().title,
          price: originalPrice[0],
          salePrice:salePrice[0],
          pictures:[...doc.data().images],
          availability:doc.data().availability,
          rating:doc.data().ratings.averageStar,
          categoryId: doc.data().categoryId,
          description: doc.data().description,
          specs: doc.data().specs,
          feedback: doc.data().feedback,
          orders: doc.data().orders,
          totalAvailableQuantity: doc.data().totalAvailableQuantity,
          variants: doc.data().variants
      }
      aliProductsArray.push(newObj)
      originalPrice=[]
      salePrice=[]
    })
    return aliProductsArray;
  }catch(error){
    alert(error)
  }
}

// getting single product from firestore 
export const getSingleProduct = async (id) =>{
  const productRef = firestore.doc(`products/${id}`)
  try {
    const product = await productRef.get()
    if (!product.exists){
      const aliProductRef = firestore.doc(`aliproducts/${id}`)
      try{
        const aliProduct = await aliProductRef.get()
      var originalPrice =[]
      if (aliProduct.data().originalPrice.min == aliProduct.data().originalPrice.max){
        originalPrice.push(Math.round(aliProduct.data().originalPrice.min * 90))
      } else{
        originalPrice.push(`${Math.round(aliProduct.data().originalPrice.min * 90)}- ${Math.round(aliProduct.data().originalPrice.max * 90)}`)
      }
      var salePrice =[]
      if (aliProduct.data().salePrice.min == aliProduct.data().salePrice.max){
        salePrice.push(Math.round(aliProduct.data().salePrice.min * 90))
      } else{
        salePrice.push(`${Math.round(aliProduct.data().salePrice.min * 90)}- ${Math.round(aliProduct.data().salePrice.max * 90)}`)
      }
        const aliProductObj ={
          id:aliProduct.data().productId,
          name:aliProduct.data().title,
          price: originalPrice[0],
          salePrice:salePrice[0],
          pictures:[...aliProduct.data().images],
          availability:aliProduct.data().availability,
          rating:aliProduct.data().ratings.averageStar,
          categoryId: aliProduct.data().categoryId,
          description: aliProduct.data().description,
          specs: aliProduct.data().specs,
          feedback: aliProduct.data().feedback,
          orders: aliProduct.data().orders,
          totalAvailableQuantity: aliProduct.data().totalAvailableQuantity,
          variants: aliProduct.data().variants
        }
        return aliProductObj
      }catch(error){
        alert(error)
      }

    }else{
      return product.data()
    }
   
  }catch(error){
    alert(error)
  }
}

//  upload image of bank slip or bkash slip transaction 
export const uploadImage = async (file) =>{
  const imageRef = storage.ref(`payments/${GenerateUniqueID()}`)
 
  await imageRef.put(file)
  var imgUrl = []
  await imageRef.getDownloadURL().then((url)=>{
      imgUrl.push(url)
    })  
  return imgUrl[0] 
}
// upload payment with image of the slip 
export const uploadPayment =async (payment,user) =>{
  const paymentRef =firestore.doc(`payments/${payment.orderId}`)
  try{
    const snapShot = await paymentRef.get()
    if (snapShot.exists){
      const previousPayments =await snapShot.data().payments
      console.log(snapShot.data())
      paymentRef.update({
        payments:[...previousPayments, payment],
      }
      )
    }else{
      paymentRef.set({
        payments:[payment]
      })
    }
    const userRef = firestore.doc(`users/${user.id}`)
    const userSnapShot =await userRef.get()
    userRef.update({
      paymentsArray:userSnapShot.data().paymentsArray?[...userSnapShot.data().paymentsArray, payment]:[payment]
    })
  }catch(error){
    alert(error)
  }

  
}
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const singInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default firebase;
