const INITIAL_STATE = {currentUser:null}

const setCurrentUserReducer = (state =INITIAL_STATE, action)=>{
    switch (action.type){
        case "SET_CURRENT_USER":
            if (action.payload.email =='fahim' && action.payload.password =='01521'){
                return {...state, currentUser:action.payload}
            } 
            return {...state};
        default:
            return {...state};
    }
        
}
export default setCurrentUserReducer;