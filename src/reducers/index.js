import { combineReducers } from 'redux';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'

// Import custom components
import productReducer from './products';
import searchedProductsArrayReducer from './searchedProducts';
import searchedProductReducer from './searchedProductDetail';
import cartReducer from './cart';
import filtersReducer from './filters';
import wishlistReducer from './wishlist';
import compareReducer from './compare';
import setCurrentUserReducer from './currentUser'
import setOrderReducer from './orders'


const rootReducer = combineReducers({
    user:setCurrentUserReducer,
    data: productReducer,
    cartList: cartReducer,
    filters: filtersReducer,
    wishlist: wishlistReducer,
    compare: compareReducer,
    orders:setOrderReducer,
    searchedProducts:searchedProductsArrayReducer,
    singleProduct:searchedProductReducer,
    Intl
});

export default rootReducer;