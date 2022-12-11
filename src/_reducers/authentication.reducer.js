import { userConstants } from '../_constants';

let customer = JSON.parse(localStorage.getItem('customerInfo'));
const initialState = customer ? { loggedIn: true, customer } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                customer: action.customer
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                customer: action.customer
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}