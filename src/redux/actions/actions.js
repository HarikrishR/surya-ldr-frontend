import { store } from "../store";
import * as actionTypes from "./actionTypes";
import { get, post } from "../../common/httpService";

var endPoint = "http://localhost:8000";

export const isAuthenticatedRes = (isAuthenticatedRes) => ({
    type: actionTypes.IS_AUTHENTICATED,
    isAuthenticatedRes
})

export const signUp = (data) => (dispatch) => {
    post(endPoint + "/signUp", data).then((result)=>{
        store.dispatch(signUpRes(result.data))
    })
    .catch((exception)=>{
        store.dispatch(signUpRes(exception))
    })
}

export const signUpRes = (signUpRes) => ({
    type: actionTypes.SIGN_UP,
    signUpRes
})

export const signIn = (data) => (dispatch) => {
    post(endPoint + "/signIn", data).then((result)=>{
        store.dispatch(signInRes(result.data))
    })
    .catch((exception)=>{
        store.dispatch(signInRes(exception))
    })
}

export const signInRes = (signInRes) => ({
    type: actionTypes.SIGN_IN,
    signInRes
})

export const userDataRes = (userDataRes) => ({
    type: actionTypes.USER_DATA,
    userDataRes
})

export const fetchAllUsers = () => (dispatch) => {
    console.log('sadasd');
    get(endPoint + "/getUsers", {}).then((result)=>{
        console.log(result.data.message);
        console.log(result.data.status);
        store.dispatch(allUserRes(result.data))
    })
    .catch((exception)=>{
        store.dispatch(allUserRes(exception))
    })
}

export const allUserRes = (allUserDataRes) => ({
    type: actionTypes.ALL_USER_DATA,
    allUserDataRes
})

export const contactUs = (data) => (dispatch) => {
    post(endPoint + "/contactUs", data).then((result)=>{
        store.dispatch(contactUsRes(result.data))
    })
    .catch((exception)=>{
        store.dispatch(contactUsRes(exception))
    })
}

export const contactUsRes = (contactUsRes) => ({
    type: actionTypes.CONTACT_US,
    contactUsRes
})

export const career = (data) => (dispatch) => {
    post(endPoint + "/career", data).then((result)=>{
        store.dispatch(careerRes(result.data))
    })
    .catch((exception)=>{
        store.dispatch(careerRes(exception))
    })
}

export const careerRes = (careerRes) => ({
    type: actionTypes.CAREER,
    careerRes
})