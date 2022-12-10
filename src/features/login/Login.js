import React, { Component } from 'react'
import "../Css/Login.css"
import axios from "axios"
import { setAuthToken } from '../helpers/setAuthToken';



export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      CustomerEmail: "",
      CustomerPassword: ""
    }
    
  }

  emailHandler(e){
    this.setState({CustomerEmail:e.target.value})
  }
  passwordHandler(e){
    this.setState({CustomerPassword:e.target.value})
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({Email:value}); 
 }

   triggerr= async(e) => {
    debugger;
    e.preventDefault();
    console.log(this.state.CustomerEmail);
    await axios.post("https://localhost:44335/api/customers/login", {
      Email: this.state.CustomerEmail,
      Password: this.state.CustomerPassword
    })
      .then(function (response) {
        console.log("buraya girdi");
        //get token from response
        const token = response.data.token;

        //set JWT token to local
        localStorage.setItem("token", token);

        //set token to axios common header
        setAuthToken(token);

        //redirect user to home page
        window.location.href = '/'
      })
      .catch(function (error) {
        console.log(error);
      });
  }




  render() {

    return (
      <div>
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
                  onChange={this.emailHandler.bind(this)}
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
                  onChange={this.passwordHandler.bind(this)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-primary" onClick={this.triggerr}>
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}




