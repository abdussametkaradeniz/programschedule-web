import { authHeader } from '../_helpers';
import axios from "axios";

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete,
    GetCustomerlogin,
};

function login(Email, Password) {
    debugger;
 /*    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Email, Password })
    }; */

    return axios.post("https://localhost:44335/api/customers/login", { Email, Password })
        .then(handleResponse)
        .then(customer => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('token', JSON.stringify(customer.token));
            console.log(customer);
            return customer;
        })
        .then(GetCustomerlogin(Email))
        .catch(error => console.log(error));
}
function GetCustomerlogin(Email) {
    debugger;
 /*    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Email, Password }),
        Authorization:localStorage.getItem("token")
    }; */
    let url = "https://localhost:44335/api/customers/GetCustomerByEmail/"+Email;
    return axios.post(url)
        .then(customer => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('customerInfo', JSON.stringify(customer.data));
            console.log(customer);
        })
        .catch(error => console.log(error));
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch("https://localhost:44335/api/customers/GetAllCustomers", requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`https://localhost:44335/api/customers/GetCustomerById/${id}`, requestOptions).then(handleResponse);
}

function register(customer) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer)
    };

    return fetch(`https://localhost:44335/api/customers/register`, requestOptions).then(handleResponse);
}

function update(customer) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(customer)
    };

    return fetch(`/users/${customer.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log("burası handleresponse userserviceden döndü");
        console.log(data);
        return data;
    });
}