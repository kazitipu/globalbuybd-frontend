import shop from "../api/shop";
import * as types from "../constants/ActionTypes";
import store from "../store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import wishlist from "../components/wishlist";

export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    payload: user,
  };
};

export const setReduxCart = (cartArray) => {
  return {
    type: "SET_REDUX_CART",
    payload: cartArray,
  };
};

export const setReduxWishlist = (wishlistArray) => {
  return {
    type: "SET_REDUX_WISHLIST_ARRAY",
    payload: wishlistArray,
  };
};
export const setSearchedProductsArray = (productsArray) => {
  return {
    type: "SET_SEARCHED_PRODUCTS_ARRAY",
    payload: productsArray,
  };
};
export const setSearchedProductDetail = (product, route) => {
  return {
    type: "SET_SEARCHED_PRODUCT_DETAIL",
    payload: product,
    route,
  };
};

// export const fetchProductsBegin = () => ({
//     type: types.FETCH_PRODUCTS_BEGIN
// });

// export const receiveProducts = products => ({
//     type: types.RECEIVE_PRODUCTS,
//     products
// })

// export const getAllProducts = () => dispatch => {
//     dispatch(fetchProductsBegin());
//     shop.getProducts(products => {
//         dispatch(receiveProducts(products));
//         return products;
//     })
// }
export const getAllProductsFirestore = (productsArray) => {
  return {
    type: "FETCH_ALL_PRODUCTS_FROM_FIRESTORE",
    payload: productsArray,
  };
};
export const fetchSingleProduct = (productObj) => ({
  type: types.FETCH_SINGLE_PRODUCT,
  payload: productObj,
});

//it seems that I should probably use this as the basis for "Cart"

export const addToCart = (product, qty) => (dispatch) => {
  toast.success("Item Added to Cart");
  dispatch(addToCartUnsafe(product, qty));
};
export const addToCartAndRemoveWishlist = (product, qty) => (dispatch) => {
  toast.success("Item Added to Cart");
  dispatch(addToCartUnsafe(product, qty));
  // dispatch(removeFromWishlist(product));
};
export const addToCartUnsafe = (product, qty) => ({
  type: types.ADD_TO_CART,
  product,
  qty,
});
export const removeFromCart = (product) => (dispatch) => {
  toast.error("Item Removed from Cart");
  dispatch({
    type: types.REMOVE_FROM_CART,
    product,
  });
};
export const removeCart = () => {
  return {
    type: "REMOVE_CART",
  };
};
export const incrementQty = (product, qty) => (dispatch) => {
  toast.success("Item Added to Cart");
  dispatch(addToCartUnsafe(product, qty));
};
export const decrementQty = (product) => (dispatch) => {
  toast.warn("Item Decrement Qty to Cart");

  dispatch({
    type: types.DECREMENT_QTY,
    product,
  });
};

//it seems that I should probably use this as the basis for "Wishlist"
export const addToWishlist = (product) => (dispatch) => {
  toast.success("Item Added to Wishlist");
  dispatch(addToWishlistUnsafe(product));
};
export const addToWishlistUnsafe = (product) => ({
  type: types.ADD_TO_WISHLIST,
  product,
});
export const removeFromWishlist = (product_id) => (dispatch) => {
  toast.error("Item Removed from Wishlist");
  dispatch({
    type: types.REMOVE_FROM_WISHLIST,
    product_id,
  });
};

// order porducts

export const setOrderObj = (orderObj) => {
  return {
    type: "SET_ORDER_OBJECT",
    payload: orderObj,
  };
};

//Compare Products
export const addToCompare = (product) => (dispatch) => {
  toast.success("Item Added to Compare");
  dispatch(addToCompareUnsafe(product));
};
export const addToCompareUnsafe = (product) => ({
  type: types.ADD_TO_COMPARE,
  product,
});
export const removeFromCompare = (product) => ({
  type: types.REMOVE_FROM_COMPARE,
  product,
});

// Filters
export const filterBrand = (brand) => ({
  type: types.FILTER_BRAND,
  brand,
});
export const filterColor = (color) => ({
  type: types.FILTER_COLOR,
  color,
});
export const filterPrice = (value) => ({
  type: types.FILTER_PRICE,
  value,
});
export const filterSort = (sort_by) => ({
  type: types.SORT_BY,
  sort_by,
});

// Currency
export const changeCurrency = (symbol) => ({
  type: types.CHANGE_CURRENCY,
  symbol,
});

export const setImgUrl = (imgUrl) => ({
  type: "SET_IMG_URL",
  payload: imgUrl,
});
