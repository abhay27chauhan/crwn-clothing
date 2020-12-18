const INITIAL_STATE = {
    currentUser: null
}

export const ACTION = {
    SET_CURRENT_USER: "SET_CURRENT_USER"
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ACTION.SET_CURRENT_USER:
            return  {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;