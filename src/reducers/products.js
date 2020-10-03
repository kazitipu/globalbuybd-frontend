import {
    FETCH_SINGLE_PRODUCT,
    CHANGE_CURRENCY,
    RECEIVE_PRODUCTS } from "../constants/ActionTypes";


const initialState = {
    products: [],
    symbol: 'Tk',
    product_details: []
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return { ...state,
                products: action.products };
        case "FETCH_ALL_PRODUCTS_FROM_FIRESTORE":
            return {...state, products:action.payload}
        case FETCH_SINGLE_PRODUCT:
            return {...state, products:[...state.products, action.payload]}

        case CHANGE_CURRENCY:
            return { ...state,
                symbol: action.symbol };
        // default:
        //     return {...state};
    }
    return state
};
export default productReducer;