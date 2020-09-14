const INITIAL_STATE = {currentUser:{
    displayName:'',
    email:'',
    password:''
}}

const setCurrentUserReducer = (state =INITIAL_STATE, action)=>{
    switch (action.type){
        case "SET_CURRENT_USER":
            return {...state, currentUser : action.payload}
        default:
            return {...state}
    }
        
}
export default setCurrentUserReducer;