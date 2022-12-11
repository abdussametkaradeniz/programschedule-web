import React, { useState } from 'react'
import "../Css/Login.css"
import axios from "axios"
import { setAuthToken } from '../helpers/setAuthToken';
import { useSelector, useDispatch } from 'react-redux';
import {
login,
logout,
LoginAsync,
selectCustomerId,
selectCustomerLoginStatus,
} from "./LoginReducer";





export default function Login() {
debugger;
  const dispatch = useDispatch();
  const getCustomerId = useSelector(selectCustomerId);
  const getCustomerLoginStatus = useSelector(selectCustomerLoginStatus);
  const [customerEmail,setCustomerEmail] = useState("");
  const [customerPassword,setCustomerPassword] = useState("");

  const handleSubmit=(e)=>{
    debugger;
    e.preventDefault();
    console.log(this.state.CustomerEmail);
    dispatch(LoginAsync(customerEmail,customerPassword));

  }


  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="form-group mt-3">
            <label>email</label>
            <input
              id='Email'
              type="email"
              name='Email'
              className="form-control mt-1"
              placeholder='Enter your Email'
              onChange={(e) => setCustomerEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              id='Password'
              type="password"
              name='Password'
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e)=>setCustomerPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button className="btn btn-primary" onClick={()=>this.handleSubmit()}>
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}



/* 
   onSubmit= async(e) => {
    debugger;
    e.preventDefault();
    console.log(this.state.CustomerEmail);
    await axios.post("https://localhost:44335/api/customers/login", {
      Email: this.state.CustomerEmail,
      Password: this.state.CustomerPassword
    })
      .then(function (response) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        setAuthToken(token);
      })
      .catch(function (error) {
        console.log(error);
      });
      let urlForCustomer = "https://localhost:44335/api/customers/GetCustomerByEmail/"+this.state.CustomerEmail;
    await axios.post(urlForCustomer)
    .then(function (fd){
      console.log(fd.data.CustomerId);
      const lCustomerId = fd.data.CustomerId;
      localStorage.setItem("CustomerId",lCustomerId);
      window.location.href = '/'
    })
    .catch(function (error){
      console.log(error);
    });
  } */






