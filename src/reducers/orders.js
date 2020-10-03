const INITIAL_STATE = {orders:[]}

const setOrderReducer = (state =INITIAL_STATE, action)=>{
    switch (action.type){
        case "SET_ORDER_OBJECT":
            return {...state, orders :[...state.orders, action.payload]}
        default:
            return {...state}
    }
        
}
export default setOrderReducer;