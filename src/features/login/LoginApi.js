import axios from "axios"
import * as actionTypes from "../../global/globalVariables";
import { setAuthToken } from '../helpers/setAuthToken';
import { useDispatch } from 'react-redux';



export async function getLogin(email, password) {
  let url = actionTypes.HOSTNAME + "customers/login";
  return (axios.post(url, {
    Email: email,
    Password: password
  })
    .then(function (response) {
      console.log("login api getLogin çalıştı");
      const token = response.data.token;
      localStorage.setItem("token", token);
      setAuthToken(token);
    })
    .then(getCustomer(email))
    .catch(function (error) {
      console.log(error);
    })
  );
}

export async function getCustomer(email) {
  let url = actionTypes.HOSTNAME + "customers/GetCustomerByEmail" + email;
  return (axios.post(url))
    .then(function (response) {
      console.log("login api çalıştı");
      console.log(response.data.CustomerId);
      const lCustomerId = response.data.CustomerId;
      localStorage.setItem("CustomerId", lCustomerId);
      window.location.href = '/'
    })
    .catch(function (error) {
      console.log(error);
    });
}
/*   new Promise((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500) */