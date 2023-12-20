import * as actionTypes from "./actions/actionTypes";

const initialState = {
    isAuthenticated : false,
    userData : null,
    signUpData : null,
    signInData : null,
    allUserData : "",
    contactUsData : null,
}

const reducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);

    switch(action.type){
        case actionTypes.IS_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated : action.isAuthenticatedRes
            }

        case actionTypes.SIGN_UP:
            return {
                ...state,
                signUpData : action.signUpRes
            }

        case actionTypes.SIGN_IN:
            return {
                ...state,
                signInData : action.signInRes
            }

        case actionTypes.USER_DATA:
            return {
                ...state,
                userData : action.userDataRes
            }

        case actionTypes.ALL_USER_DATA:
            return {
                ...state,
                allUserData : action.allUserDataRes
            }

        case actionTypes.CONTACT_US:
            return {
                ...state,
                contactUsData : action.contactUsRes
            }

        default:
            return state;

    }
}

export { reducer, initialState };