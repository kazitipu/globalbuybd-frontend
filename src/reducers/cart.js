import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_QTY,
    DECREMENT_QTY, 
    FETCH_PRODUCTS_BEGIN} from "../constants/ActionTypes";


export default function cartReducer(state = {
    cart: []
}, action) {
    switch (action.type) {
        
        case ADD_TO_CART:
            const productId = action.product.id
            var sameVariant =state.cart.filter(item=>{
                if (item.id=== action.product.id &&  item.sizeOrShipsFrom?item.sizeOrShipsFrom === action.product.sizeOrShipsFrom:true){
                    if ( item.color?item.color === action.product.color:true){
                        return item
                    }
                 
          
                }})
            if ((state.cart.findIndex(product => product.id === productId) !== -1) && sameVariant.length >0) {
                const cart = state.cart.reduce((cartAcc, product) => {
                    if (product.id === productId && product.color? product.color === action.product.color:true) {
                        if (product.size?product.size === action.product.size:true)
                        cartAcc.push({ ...product, qty: parseInt(product.qty)+parseInt(action.qty), sum:(typeof product.salePrice == 'string'? (product.salePrice.includes('-')?product.salePrice.split('-')[1]:parseInt(product.salePrice)):product.salePrice)*(parseInt(product.qty)+parseInt(action.qty)) }) // Increment qty
                    } else {
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])

                return { ...state, cart }
            }
            return { ...state, cart: [...state.cart, { ...action.product, qty: action.qty, sum:(typeof action.product.salePrice == 'string'? (action.product.salePrice.includes('-')?action.product.salePrice.split('-')[1]:parseInt(action.product.salePrice)):action.product.salePrice)*parseInt(action.qty)}] }
            
        case 'SET_REDUX_CART':
            return {...state, cart:action.payload}

        case DECREMENT_QTY:
            var sameVariant =state.cart.filter(item=>{
                if (item.id=== action.product.id &&  item.sizeOrShipsFrom?item.sizeOrShipsFrom === action.product.sizeOrShipsFrom:true){
                    if ( item.color?item.color === action.product.color:true){
                        return item
                    }
                 
          
                }})
            
            if ((state.cart.findIndex(product => product.id === action.productId) !== -1) && (sameVariant.length >0)) {

                const cart = state.cart.reduce((cartAcc, product) => {
                    if (product.id === action.productId && product.qty >= 1) {
                        if ((product.color?product.color === action.product.color:true) && (product.sizeOrShipsFrom?product.sizeOrShipsFrom === action.product.sizeOrShipsFrom:true)){
                            cartAcc.push({ ...product, qty: product.qty-1, sum:(typeof product.salePrice == 'string'? (product.salePrice.includes('-')?product.salePrice.split('-')[1]:parseInt(product.salePrice)):product.salePrice)*(product.qty-1) }) // Decrement qty
                        }
                        //console.log('price: '+product.price+'Qty: '+product.qty)
                        
                    }else{
                        cartAcc.push(product)
                    }

                    return cartAcc
                }, [])
                const newCart = cart.filter(item=> item.qty !== 0)

                return { ...state, cart:newCart}
            }

            return { ...state, cart: [...state.cart, { ...action.product, qty: action.qty, sum:(typeof action.product.salePrice == 'string'? (action.product.salePrice.includes('-')?action.product.salePrice.split('-')[1]:parseInt(action.product.salePrice)):action.product.salePrice)*action.qty }] }

        case REMOVE_FROM_CART:
            var cart =[]
            state.cart.forEach((cartItem)=>{
             if (cartItem.id !== action.product.id){
                 cart.push(cartItem)
             }else{
                 if (cartItem.color?cartItem.color !== action.product.color:true){
                     cart.push(cartItem)
                 }else{
                     if (cartItem.sizeOrShipsFrom?cartItem.sizeOrShipsFrom !== action.product.sizeOrShipsFrom:true){
                         cart.push(cartItem)
                     }}
             }
         
         })
            return {
                ...state, cart: cart
            }
        // case 'REMOVE_CART':
        //     return {
        //         ...state, cart:[]
        //     }

        default:
    }
    return state;
}